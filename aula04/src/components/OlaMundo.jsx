import React from "react";


{/*function OlaMundo()
{
    return (
        <div className="OlaMundo">
            <h1>Olá Mundo!!!</h1>
        </div>

    );
}
*/}
const OlaMundo = (props) => {
    return (
        <div className="OlaMundo">
            <h1> Olá Mundo {props.nome}!!!</h1>
        </div>
    )
}


export default OlaMundo;