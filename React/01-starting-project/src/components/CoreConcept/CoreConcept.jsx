import React from "react";
import "./coreconcept.scss";

const CoreConcepts = ({ obj }) => {
  const { image, title, description } = obj;
  return (
    <li id="core-conecpts-id">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcepts;
