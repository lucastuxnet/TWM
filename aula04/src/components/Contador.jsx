import React, {useState} from "react";

const Contador = () => {
    const [Contador, setContador] = useState(0)
    const inc = () => {
        setContador(Contador + 1);
    }
    const dec = () => {
        setContador(Contador - 1);
    }

    return (
        <div className="Contador">
            <h2>Contador</h2>
            <h3>{Contador}</h3>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )

}

export default Contador;