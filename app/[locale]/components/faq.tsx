import { FaqItem } from "@/types/model";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = ({ items }: { items: FaqItem[] }) => {
  return (
    <section
      className="flex flex-col items-center max-w-[620px] mx-auto px-4 gap-6"
      data-anchor="faq"
    >
      <h2 className="title">FAQ</h2>

      <Accordion type="single" collapsible>
        {items.map((item, i) => (
          <AccordionItem value={`item-${i}`} key={i}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
