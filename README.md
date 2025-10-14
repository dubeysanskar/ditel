# TechConnect Solutions - Website

A modern, responsive website for TechConnect Solutions - providing ISP services, CCTV surveillance systems, and refurbished laptops.

## 🚀 Features

- **Single-Page Design** with smooth scroll navigation
- **Separate Contact Page** with Google Maps integration
- **Product Catalog** with advanced filtering (Category, Laptop subcategories)
- **WhatsApp Integration** - Floating CTAs with contextual pre-filled messages
- **Blog Section** - SEO-optimized sample posts
- **Responsive Design** - Mobile-first approach
- **Framer Motion Animations** - Smooth, subtle micro-interactions
- **SEO Optimized** - Meta tags, sitemap, structured data
- **Accessible** - WCAG 2.1 AA compliant

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **React Helmet Async** - SEO meta tags
- **XLSX** - Excel file parsing

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your details:
   - `VITE_WHATSAPP_NUMBER` - Your WhatsApp number (with country code)
   - `VITE_CONTACT_EMAIL` - Contact email
   - `VITE_GOOGLE_MAPS_EMBED` - Google Maps embed URL
   - Other site configuration

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:8080`

## 📁 Project Structure

```
├── public/
│   ├── sitemap.xml          # SEO sitemap
│   └── robots.txt           # Search engine directives
├── scripts/
│   └── import-products.ts   # Excel to JSON import script
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── sections/        # Page sections (About, Services, etc.)
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── Footer.tsx       # Footer component
│   │   └── WhatsAppFloat.tsx # WhatsApp floating CTAs
│   ├── data/
│   │   ├── products.json    # Product catalog
│   │   └── blog-posts.ts    # Blog posts
│   ├── lib/
│   │   ├── utils.ts         # Utility functions
│   │   └── whatsapp.ts      # WhatsApp integration helpers
│   ├── pages/
│   │   ├── Index.tsx        # Home page (single-page)
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app component
│   ├── index.css            # Global styles & design system
│   └── main.tsx             # Entry point
├── .env.example             # Environment variables template
├── .env                     # Your environment variables (git-ignored)
├── tailwind.config.ts       # Tailwind configuration
└── vite.config.ts           # Vite configuration
```

## 🎨 Design System

The site uses a clean, minimal design with:

- **Primary Color**: Soft indigo (trust, technology)
- **Secondary Color**: Teal (modern, fresh)
- **Accent Color**: Amber (warmth, attention)
- **Typography**: Inter font family
- **White Background** with subtle gradients
- **Semantic tokens** defined in `src/index.css`

All colors use HSL format and are defined as CSS variables for consistency.

## 📱 WhatsApp Integration

WhatsApp number is stored **once** in `.env` as `VITE_WHATSAPP_NUMBER`.

### Usage

```typescript
import { 
  getGeneralEnquiryLink, 
  getProductEnquiryLink, 
  getServiceEnquiryLink 
} from '@/lib/whatsapp';

// General enquiry
<a href={getGeneralEnquiryLink()}>Contact</a>

// Product enquiry
<a href={getProductEnquiryLink("MacBook Air 2019")}>Enquire</a>

// Service enquiry
<a href={getServiceEnquiryLink("ISP Services")}>Learn More</a>
```

### Floating CTAs

- **Mobile**: Single button (bottom-right)
- **Desktop**: Mirrored buttons (bottom-left: general, bottom-right: contextual)

## 📦 Product Import

Products are stored in `src/data/products.json`. To import from Excel:

### From Excel File

1. Place your Excel file (e.g., `products.xlsx`) in the project root
2. Run the import script:
   ```bash
   npx tsx scripts/import-products.ts ./products.xlsx
   ```

### Excel Format

The script automatically detects common column headers:

| Supported Headers | Field |
|-------------------|-------|
| Name, Product Name | Product name |
| Category, Type | Category (ISP/CCTV/Laptops) |
| Subcategory, Variant | Subcategory |
| Price, Cost, MRP | Price |
| Description, Details | Description |
| Image URL, Image | Image URL |
| SKU, Product ID | SKU |
| Stock, Quantity | Stock |

**Missing images?** The script automatically adds Unsplash placeholders.

### Manual Product Entry

Edit `src/data/products.json` directly:

```json
{
  "id": "unique-id",
  "name": "Product Name",
  "category": "Laptops",
  "subcategory": "Gaming",
  "price": 45999,
  "currency": "INR",
  "shortDescription": "Brief description",
  "imageUrl": "https://...",
  "sku": "SKU-001",
  "stock": 10,
  "urlSlug": "product-name"
}
```

## 🔍 SEO & Structured Data

### Meta Tags

Each page includes:
- Title tags (< 60 characters)
- Meta descriptions (< 160 characters)
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### Sitemap

Located at `/sitemap.xml`. Update URLs after deployment.

### Structured Data

Product JSON-LD schema is automatically generated for products with pricing.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output will be in `dist/` folder.

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables from `.env`

### Deploy to Vercel

1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables from `.env`

## 🧪 Testing Checklist

- [ ] All navigation links work (smooth scroll)
- [ ] Contact form submits successfully
- [ ] WhatsApp links open correctly with pre-filled messages
- [ ] Product filtering works (all categories & subcategories)
- [ ] Modal opens/closes properly
- [ ] Mobile responsive (test all breakpoints)
- [ ] Images load correctly (lazy loading)
- [ ] Blog posts display and open in modal
- [ ] Google Maps embed loads on Contact page
- [ ] SEO meta tags present on all pages
- [ ] Lighthouse scores: Performance ≥90, Accessibility ≥90

## 🎯 Lighthouse Targets

- **Performance**: ≥ 90
- **Accessibility**: ≥ 90
- **Best Practices**: ≥ 90
- **SEO**: 100

### Optimization Tips

- Images are lazy-loaded
- Fonts are preloaded
- Critical CSS is inlined
- Components are code-split
- Minimal JavaScript bundle

## 📞 Support

For questions or issues, contact:
- Email: info@techconnect.com
- WhatsApp: [Number in .env]

## 📄 License

© 2024 TechConnect Solutions. All rights reserved.

## 🙏 Credits

- Design inspiration: Modern SaaS landing pages
- Icons: Lucide React
- Images: Unsplash
- UI Components: shadcn/ui
