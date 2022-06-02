import React from "react";

function Display(props) {
  return (
    <>
      <h1>{props.frase_display}</h1>
      <h2>{props.mostrar ? props.numero : ""}</h2>
    </>
  );
}

export default Display;
