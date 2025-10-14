/**
 * Product Import Script
 * 
 * Converts Excel file (/mnt/data/products.xlsx) to normalized products.json
 * 
 * Usage:
 *   node --loader tsx scripts/import-products.ts [path-to-excel]
 * 
 * Example:
 *   node --loader tsx scripts/import-products.ts ./data/products.xlsx
 */

import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

interface RawProduct {
  [key: string]: any;
}

interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  shortDescription: string;
  imageUrl: string;
  sku: string;
  stock: number;
  urlSlug: string;
  imageMissing?: boolean;
}

// Common header variations to attempt
const HEADER_MAPPINGS = {
  name: ['name', 'product name', 'product', 'title'],
  category: ['category', 'product category', 'type'],
  subcategory: ['subcategory', 'sub-category', 'sub category', 'variant'],
  price: ['price', 'cost', 'amount', 'mrp'],
  currency: ['currency', 'curr'],
  description: ['description', 'short description', 'desc', 'details'],
  imageUrl: ['image url', 'image', 'img url', 'picture'],
  sku: ['sku', 'product id', 'id', 'code'],
  stock: ['stock', 'quantity', 'qty', 'available'],
};

function findColumn(headers: string[], possibleNames: string[]): string | null {
  const normalizedHeaders = headers.map(h => h.toLowerCase().trim());
  
  for (const possible of possibleNames) {
    const index = normalizedHeaders.indexOf(possible);
    if (index !== -1) {
      return headers[index]; // Return original case
    }
  }
  
  return null;
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function generatePlaceholderImage(category: string): string {
  const categoryImages: { [key: string]: string } = {
    'isp': 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop',
    'cctv': 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=400&h=300&fit=crop',
    'laptops': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
  };
  
  return categoryImages[category.toLowerCase()] || 
         'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop';
}

function normalizeProduct(raw: RawProduct, headers: string[], index: number): Product | null {
  try {
    // Find columns
    const nameCol = findColumn(headers, HEADER_MAPPINGS.name);
    const categoryCol = findColumn(headers, HEADER_MAPPINGS.category);
    const subcategoryCol = findColumn(headers, HEADER_MAPPINGS.subcategory);
    const priceCol = findColumn(headers, HEADER_MAPPINGS.price);
    const descCol = findColumn(headers, HEADER_MAPPINGS.description);
    const imageCol = findColumn(headers, HEADER_MAPPINGS.imageUrl);
    const skuCol = findColumn(headers, HEADER_MAPPINGS.sku);
    const stockCol = findColumn(headers, HEADER_MAPPINGS.stock);

    // Extract values
    const name = nameCol ? String(raw[nameCol] || '').trim() : '';
    const category = categoryCol ? String(raw[categoryCol] || 'General').trim() : 'General';
    const subcategory = subcategoryCol ? String(raw[subcategoryCol] || 'Standard').trim() : 'Standard';
    
    if (!name) {
      console.warn(`Row ${index + 2}: Skipping - no name found`);
      return null;
    }

    const price = priceCol ? parseFloat(String(raw[priceCol] || 0)) : 0;
    const description = descCol ? String(raw[descCol] || '').trim() : '';
    let imageUrl = imageCol ? String(raw[imageCol] || '').trim() : '';
    const sku = skuCol ? String(raw[skuCol] || `SKU-${index + 1}`).trim() : `SKU-${index + 1}`;
    const stock = stockCol ? parseInt(String(raw[stockCol] || 0)) : 0;

    const imageMissing = !imageUrl;
    if (imageMissing) {
      imageUrl = generatePlaceholderImage(category);
    }

    const product: Product = {
      id: `${category.toLowerCase().replace(/\s+/g, '-')}-${generateSlug(name)}-${index}`,
      name,
      category,
      subcategory,
      price,
      currency: 'INR',
      shortDescription: description || `${name} - High quality product from ${category} category.`,
      imageUrl,
      sku,
      stock,
      urlSlug: generateSlug(name),
      ...(imageMissing && { imageMissing: true }),
    };

    return product;
  } catch (error) {
    console.error(`Error processing row ${index + 2}:`, error);
    return null;
  }
}

function importProducts(excelPath: string, outputPath: string): void {
  console.log('📦 Product Import Script Starting...\n');

  // Check if Excel file exists
  if (!fs.existsSync(excelPath)) {
    console.error(`❌ Error: Excel file not found at ${excelPath}`);
    console.log('\nPlease provide a valid path to your products Excel file.');
    process.exit(1);
  }

  console.log(`📄 Reading Excel file: ${excelPath}`);

  try {
    // Read the Excel file
    const workbook = XLSX.readFile(excelPath);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];

    // Convert to JSON
    const rawData: RawProduct[] = XLSX.utils.sheet_to_json(worksheet);

    if (rawData.length === 0) {
      console.error('❌ Error: No data found in Excel file');
      process.exit(1);
    }

    console.log(`✅ Found ${rawData.length} rows in Excel`);

    // Get headers from first row
    const headers = Object.keys(rawData[0]);
    console.log(`\n📋 Detected columns: ${headers.join(', ')}`);

    // Process each row
    const products: Product[] = [];
    let skipped = 0;

    rawData.forEach((row, index) => {
      const product = normalizeProduct(row, headers, index);
      if (product) {
        products.push(product);
      } else {
        skipped++;
      }
    });

    console.log(`\n✅ Successfully processed ${products.length} products`);
    if (skipped > 0) {
      console.log(`⚠️  Skipped ${skipped} rows (missing required data)`);
    }

    // Count products with missing images
    const missingImages = products.filter(p => p.imageMissing).length;
    if (missingImages > 0) {
      console.log(`\n⚠️  ${missingImages} products have placeholder images (no image URL in Excel)`);
    }

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write to JSON file
    fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
    console.log(`\n💾 Products saved to: ${outputPath}`);

    // Summary
    console.log('\n📊 Summary:');
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
      const count = products.filter(p => p.category === cat).length;
      console.log(`   - ${cat}: ${count} products`);
    });

    console.log('\n✨ Import completed successfully!\n');

  } catch (error) {
    console.error('❌ Error during import:', error);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
const excelPath = args[0] || './products.xlsx';
const outputPath = './src/data/products.json';

importProducts(excelPath, outputPath);
