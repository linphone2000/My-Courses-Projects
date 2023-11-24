import React from "react";
import mainImage from "../../assets/react-core-concepts.png";
import "./header.scss";

const Header = () => {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  return (
    <header>
      <img src={mainImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
