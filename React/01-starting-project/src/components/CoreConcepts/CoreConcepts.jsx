import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "../CoreConcept/CoreConcept"
import Section from "../Section/Section";

const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} obj={conceptItem} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
