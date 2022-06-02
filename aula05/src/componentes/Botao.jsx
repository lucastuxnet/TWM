import React from "react";

function Botao(props) 
{   
    return (
        <div>
            <button onClick={props.quandoClicar}>{props.frase}</button>
        </div>
    );
    
}

export default Botao;