import React, { useState } from "react";
import Display from "./Display";
import Botao from "./Botao";
import BotaoParametro from "./BotaoParametro";
import "./Input.css";

function Contador() {
  const [numero, setNumero] = useState(0);
  const [valN1, setValN1] = useState(4);
  const [valN2, setValN2] = useState(5);
  const [valSoma, setValSoma] = useState(0);

  const inc = () => {
    setNumero(numero + 1);
  };

  const dec = () => {
    setNumero(numero - 1);
  };

  function soma(a, b) {
    setValSoma(parseInt(a) + parseInt(b));
    console.log("Dentro do contador");
  }

  const updateValN1 = (e) => {
    setValN1(e.target.value);
  };

  const updateValN2 = (e) => {
    console.log(e.target.value);
    setValN2(e.target.value);
  };

  return (
    <div>
      {/* <h1>Clicadas</h1>
      <h2>{numero}</h2> */}
      <Display
        frase_display="O usuário clicou: "
        numero={numero}
        mostrar={true}
      />
      <br></br>
      <br></br>
      <br></br>
      {/* <button onClick={inc}>Incrementa</button>
      <button onClick={dec}>Decrementa</button> */}
      <Botao frase="Incrementa" quandoClicar={inc} />
      <Botao frase="Decrementar" quandoClicar={dec} />
      <Display frase_display="Valor do numero A" />
      <input value={valN1} onChange={updateValN1} />
      <Display frase_display="Valor do numero B" />
      <input value={valN2} onChange={updateValN2} />
      <Display frase_display="Valor da soma" />
      <h3>{valSoma}</h3>
      <BotaoParametro a={valN1} b={valN2} frase="Soma" quandoClicar={soma} />
    </div>
  );
}

export default Contador;
