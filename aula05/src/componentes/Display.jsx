import React from "react";

function Display(props) 
{
    return (
        <div>
            <h1>{props.frase_display}</h1>
            <h2>{props.mostrar ? props.numero : ''}</h2>
        </div>
    );
    
}

export default Display;