import React from "react";
import { Link } from "react-router-dom";
import "./title.css";

const Title = ({ subheading, title, heading, text, button , redirect }) => {
  return (
    <div className="eco__title">
      {subheading === "" ? null : (
        <h3 className="eco__title-subheader">{subheading}</h3>
      )}
      {title === "" ? null : <h1 className="eco__title-topic">{title}</h1>}
      {heading === "" ? null : <h1 className="eco__title-header">{heading}</h1>}
      {text === "" ? null : <p className="eco__title-text">{text}</p>}
      {button === "" ? null : (
        <Link to={redirect} className="button eco__title-button">
          {button}
        </Link>
      )}
    </div>
  );
};

export default Title;
