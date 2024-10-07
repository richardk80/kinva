import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HiMootDescription = () => {
  return (
    <div>
      <div className="space-y-4">
        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Hi Moot?</AccordionTrigger>
          <AccordionContent>
          Hi Moot is a social network focused on privacy and a place to have fun, meet friends, and be creative.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger>It is Retro Social</AccordionTrigger>
          <AccordionContent>
          Hi Moot has all the things you miss on social networks: bulletins, blogs, forums, instant messages and more.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-3">
          <AccordionTrigger>It is Privacy Friendly</AccordionTrigger>
          <AccordionContent>
          Hi Moot has no algorithms, tracking, or personalized ads.
          </AccordionContent>
          <AccordionContent>
          Feeds on Hi Moot are chronological and contain no suggested content begging for your attention.
          </AccordionContent>
          <AccordionContent>
          You decide what you want to share and what content you would like to view.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-4">
          <AccordionTrigger>It is a Growing Community</AccordionTrigger>
          <AccordionContent>
          Hi Moot is a safe space for you and your friends to hang out online.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-5">
          <AccordionTrigger>Need Help?</AccordionTrigger>
          <AccordionContent>
          If you need help with Hi Moot, please check out our <a class="text-blue-600  font-normal hover:text-red-600 hover:underline" href="/help">help center</a>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Accordion type="single" collapsible>
        <AccordionItem value="item-6">
          <AccordionTrigger>Press</AccordionTrigger>
          <AccordionContent>
          If you have any press inquiries, please <a class="text-blue-600 hover:text-red-600 hover:underline" href="/contact">contact us</a>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-7">
          <AccordionTrigger>Contact Us</AccordionTrigger>
          <AccordionContent>
          For any other inquiries, please <a class="text-blue-600 hover:text-red-600 hover:underline" href="/contact">contact us</a>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-8">
          <AccordionTrigger>Don't Have an Account?</AccordionTrigger>
          <AccordionContent>
            You can always <a class="text-blue-600 font-normal hover:text-red-600 hover:underline" href="/signup">Join for free</a>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-4">
          <AccordionTrigger>Disclaimer</AccordionTrigger>
          <AccordionContent>
          Hi Moot is not affiliated with MySpace<sup>®</sup> in any way.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  );
};

export default HiMootDescription;