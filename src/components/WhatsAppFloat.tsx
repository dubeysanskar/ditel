import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/whatsapp";
interface WhatsAppFloatProps {
  productContext?: {
    name: string;
    company?: string;
  };
}
export function WhatsAppFloat({
  productContext
}: WhatsAppFloatProps) {
  const [isHovered, setIsHovered] = useState(false);
  const link = getWhatsAppLink();
  return <>
      {/* Mobile: Single bottom-right button */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="md:hidden fixed bottom-6 right-6 z-40 group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} aria-label="Contact us on WhatsApp">
        <div className="relative">
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-float" />
          <div className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-elegant-lg transition-all duration-300 hover:scale-110">
            <MessageCircle className="h-6 w-6" />
          </div>
        </div>
      </a>

      {/* Desktop: Mirrored buttons (left and right) */}
      <div className="hidden md:block">
        {/* Left button - General enquiry */}
        

        {/* Right button - Product/contextual enquiry */}
        <a href={link} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40 group" aria-label="Contact us on WhatsApp">
          <div className="relative">
            <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-float" />
            <div className="relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-elegant-lg transition-all duration-300 hover:scale-110 flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-medium pr-1">WhatsApp</span>
            </div>
          </div>
        </a>
      </div>
    </>;
}