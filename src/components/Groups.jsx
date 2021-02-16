import { Tab, Tabs, Container } from "react-bootstrap";
import Section from "./Section";

export default function Groups({ categories }) {
  return (
    <div>
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
                  .filter((template) =>
                    template.sections.map((section) =>
                      section.articles.map(
                        (article) => article.status === "AVAILABLE"
                      )
                    )
                  )
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
