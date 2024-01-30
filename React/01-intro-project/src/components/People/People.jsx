import { useState } from "react";
import Section from "../Section/Section";
import TabButton from "../TabButton/TabButton";
import Tabs from "../Tabs/Tabs";

const People = () => {
  const [selectedName, setSelectedName] = useState();

  const handleClick = (name) => {
    setSelectedName(name);
  };

  const peopleInfo = {
    linphone: {
      name: "Lin Phone",
      description:
        "Lin Phone was a dedicated technophile, always exploring the latest advancements in communication technology. Their fascination with innovation led them on a quest to discover new ways to connect people globally. With an insatiable curiosity, Lin delved into the realms of telecommunications, constantly seeking novel solutions to bridge distances and foster seamless interactions.",
    },
    eiei: {
      name: "Ei Ei",
      description: "In their spare time, Lin would often immerse themselves in coding projects, crafting elegant algorithms to enhance communication tools. They firmly believed in the power of technology to empower individuals, and their dedication to this cause was evident in every line of code they wrote.",
    },
  };

  let tabContent = "";
  if (!selectedName) {
    tabContent = <p>Please click on a person.</p>;
  } else {
    tabContent = (
      <div id="tab-content">
        <h3>{peopleInfo[selectedName].name}</h3>
        <p>{peopleInfo[selectedName].description}</p>
      </div>
    );
  }

  return (
    <Section title="People" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton isSelected={selectedName == "linphone"} onClick={() => handleClick("linphone")} >Lin Phone</TabButton>
            <TabButton isSelected={selectedName == "eiei"} onClick={() => handleClick("eiei")} >Ei Ei</TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default People;
