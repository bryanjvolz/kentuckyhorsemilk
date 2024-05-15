import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is horse milk safe to drink?",
    answer: "Yes, horse milk is safe to drink and has been consumed for centuries in many cultures around the world. It is rich in vitamins, minerals, and proteins and is considered highly nutritious.",
  },
  {
    question: "This is a joke, right?",
    answer: "No joke. Kentucky has let it's history as a horse state shine, but has not continued to embrace the full scope of horsing traditions. That includes the safe, ethical, humane, and delicious consumption of horse milk.",
  },
  {
    question: " Is horse milk lactose-free?",
    answer: "While horse milk does contain lactose, it has a lower lactose content compared to cow's milk, making it easier to digest for some people who are lactose intolerant. However, individuals with severe lactose intolerance should consult with a healthcare professional before consuming horse milk.",
  },
  {
    question: "Where can I buy Kentucky Horse Milk?",
    answer:
      "As Kentucky Horse Milk has fallen out of fashion over the years, it can be hard to come by. Currently the easiest way to come by a bottle is directly from the farms, at trade events, or by stopping at the Kentucky Horse Milk table at certain events such as the Kentucky State Fair. We hope to open an online shopping experience soon and will be working with storefronts state-wide to once again make sure that Kentuckians have access to this crucial piece of cultural heritage.",
  },
  {
    question: "How is Kentucky Horse Milk produced?",
    answer:
      "Kentucky Horse Milk is produced on family-owned farms throughout the Bluegrass region. Our farmers use sustainable and humane practices to care for their horses and ensure the highest quality milk. The milk is then carefully processed and packaged to preserve its freshness and flavor. Oversight and compliance is handled by EMRA - the Equine Milk Regulatory Agency",
  },
  {
    question: "What are the health benefits of drinking Kentucky Horse Milk?",
    answer:
      "Kentucky Horse Milk is rich in vitamins, minerals, and proteins, making it a nutritious beverage choice. It is high in vitamin C, B vitamins, calcium, and protein, and is believed to have various health benefits, including boosting the immune system, improving digestion, and promoting skin health. An exact breakdown is available via nutritional label or factsheet from the individual local producers."
  }
];

export default Faq;