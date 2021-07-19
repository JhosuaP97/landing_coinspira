import React from "react";
import PropTypes from "prop-types";

// Style
import { CardWrapper } from "./styles";

const BootCard = ({ img, title, description }) => {
  return (
    <CardWrapper>
      <img className="o_card_image" src={img} alt="" />
      <div className="o_card_body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CardWrapper>
  );
};

BootCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default BootCard;
