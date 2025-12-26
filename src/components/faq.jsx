import { useState } from "react";
import { Accordion, Stack, Span } from "@chakra-ui/react";

function FAQ() {
  const [value, setValue] = useState(["item-1"]);

  const faqItems = [
    {
      value: "item-1",
      question: "What makes XYZ Company's products so unique?",
      answer: "At XYZ Company, we pride ourselves on innovation and cutting-edge technology. Our products are crafted with a perfect blend of creativity and functionality, setting them apart from the competition. We constantly strive to push the boundaries of what's possible to deliver a truly exceptional user experience."
    },
    {
      value: "item-2",
      question: "How does XYZ Company contribute to sustainability and environmental conservation?",
      answer: "XYZ Company is committed to environmental responsibility. We implement eco-friendly practices throughout our production process, from sourcing materials to manufacturing. Our dedication to sustainability extends beyond our products, as we actively engage in initiatives to reduce our carbon footprint and promote a greener future."
    },
    {
      value: "item-3",
      question: "What kind of support can customers expect from XYZ Company's customer service team?",
      answer: "At XYZ Company, customer satisfaction is our top priority. Our dedicated support team is available 24/7 to address any inquiries or concerns you may have. Whether you need assistance with product usage, troubleshooting, or general information, our knowledgeable and friendly customer service representatives are always ready to provide prompt and effective support."
    },
    {
      value: "item-4",
      question: "How does XYZ Company stay ahead of industry trends?",
      answer: "XYZ Company stays at the forefront of industry trends through continuous research and development. We invest heavily in staying ahead of the curve, monitoring market dynamics, and actively seeking feedback from our customers. By embracing innovation and staying agile, we ensure that our products and services evolve to meet the ever-changing needs of our dynamic customer base."
    },
    {
      value: "item-5",
      question: "Can you tell us about XYZ Company's commitment to community involvement?",
      answer: "XYZ Company is deeply committed to giving back to the communities we serve. We actively engage in philanthropic initiatives, supporting local charities and community projects. Additionally, we encourage our employees to participate in volunteer programs, fostering a culture of social responsibility. By being actively involved in the community, we aim to make a positive impact beyond the products and services we offer."
    }
  ];

  return (
    <section id="faq">
      <h1>FAQ (คำถามที่พบบ่อย)</h1>
      <Stack gap="0" width="70%">
        <Accordion.Root value={value} onValueChange={(e) => setValue(e.value)}>
          {faqItems.map((item, index) => (
            <Accordion.Item key={index} value={item.value}>
              <Accordion.ItemTrigger textAlign="left" width="100%" paddingY="4">
                <Span flex="1">
                  <strong>Q:</strong> {item.question}
                </Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody textAlign="left" paddingTop="4" paddingBottom="4" paddingLeft="4" paddingRight="0">
                  <strong>A:</strong> {item.answer}
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Stack>
    </section>
  );
}

export default FAQ;