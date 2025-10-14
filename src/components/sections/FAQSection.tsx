import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer laptop warranty?",
    answer: "Yes, all refurbished laptops come with a warranty.",
  },
  {
    question: "Can you provide bulk orders for offices?",
    answer: "Yes, we supply in bulk with custom pricing.",
  },
  {
    question: "Do you install CCTV systems on-site?",
    answer: "Yes, full installation and after-sales support are provided.",
  },
  {
    question: "What internet speeds do you offer?",
    answer: "Plans range from home to enterprise level.",
  },
  {
    question: "How can I contact support?",
    answer: "Call 8447373543 or email vijay.massey@ditel.co.in",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products and services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-6 shadow-sm hover:shadow-elegant transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
