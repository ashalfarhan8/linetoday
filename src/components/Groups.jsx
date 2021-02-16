import React from "react";
import { Tab, Tabs, Container } from "react-bootstrap";
import Carousel from "./Carousel";
import Section from "./Section";

export default function Groups({ categories }) {
  return (
    <div className="sticky top-0">
      <Container>
        <Tabs defaultActiveKey="top" id="uncontrolled-tab-example">
          {categories.map((category) => {
            return (
              <Tab
                key={category?.id}
                eventKey={category?.name.toLowerCase()}
                title={category?.name}
              >
                {category?.templates
                  .filter((template) => template.type !== 73)
                  .map((template) => {
                    if (template.title) {
                      return <Section template={template} key={template.id} />;
                    }
                  })}
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </div>
  );
}

{
  /* <div>
  <Carousel
    articles={templates.map(
      (template) => template.sections[0].articles
    )}
  />
</div> */
}
