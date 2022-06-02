import "./Cards.css";
import React from "react";

function Cards(props) {
  const cardStyle = {
    backgroundColor: props.color || "#F00",
    borderColor: props.color || "#F00",
  };

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}

export default Cards;
