import React from "react";

function BotaoParametro(props) 
{   
    return (
        <div>
            <button onClick={() => props.quandoClicar(props.a,props.b)}>{props.frase}</button>
        </div>
    );
    
}

export default BotaoParametro;