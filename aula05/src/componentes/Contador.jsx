import React, { useState } from "react";
import Display from "./Display.jsx";
import Botao from "./Botao.jsx";
import BotaoParametro from "./BotaoParametro.jsx";

function Contador() 
{
    const [numero, setNumero] = useState(0);
    const [valN1, setValN1] = useState(0);
    const [valN2, setValN2] = useState(0);
    const [valSoma, setValNSoma] = useState(0);
    const [valSub, setValNsub] = useState(0);

    // Aerofunction incremento

    const inc = () => {
        setNumero(numero +1);
    }

    // Aerofunction incremento

    const dec = () => {
        setNumero(numero -1);
    }

    // Função soma

    function soma(a,b) {
        setValNSoma(parseInt(a) + parseInt(b));

    }

    // Função subtração

    function sub(a,b) {
        setValNsub(parseInt(a) - parseInt(b));
    }

    // Aerofunction atualizar valor A

    const updateValN1 = (e) => {
        setValN1(e.target.value);

    }

    // Aerofunction atualizar valor A

    const updateValN2 = (e) => {
        setValN2(e.target.value);
        
    }

    return (
        <div>
            <Display frase_display="O usuario clicou" numero={numero} mostrar={true} />
            <Botao frase="Incrementar" quandoClicar={inc}/>
            <Botao frase="Decrementar" quandoClicar={dec}/>
            <Display frase_display="Valor do numero A "/>
            <input value={valN1} onChange={updateValN1} />
            <Display frase_display="Valor do numero B "/>
            <input value={valN2} onChange={updateValN2} />
            <Display frase_display="Valor soma "/>
            <h2>{valSoma}</h2>
            <BotaoParametro a={valN1} b={valN2} frase="Soma" quandoClicar={soma}/>
            <BotaoParametro a={valN1} b={valN2} frase="Subtração" quandoClicar={sub}/>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Contador;