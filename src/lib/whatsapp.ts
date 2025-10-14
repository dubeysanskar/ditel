/**
 * WhatsApp utility functions
 * Single source of truth for WhatsApp integration
 */

export function getWhatsAppNumber(): string {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || "+919876543210";
  return number.replace(/\D/g, ""); // Remove all non-digit characters
}

export function whatsappLink(message: string): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getGeneralEnquiryLink(): string {
  return whatsappLink("Hi! I'd like to know more about your services.");
}

export function getProductEnquiryLink(productName: string, companyName: string = "TechConnect Solutions"): string {
  return whatsappLink(`Hi, I'm interested in ${productName} from ${companyName}. Please contact me.`);
}

export function getServiceEnquiryLink(serviceName: string): string {
  return whatsappLink(`Hi! I'd like to enquire about your ${serviceName} service.`);
}
