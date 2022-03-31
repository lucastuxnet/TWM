import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
import "bootstrap/js/src/collapse.js";
import "../css/Aluno.css";

// Criando as Mask's

export const dataMask = value => {
  console.log("Dentro da Data");
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, "$1/$2") // captura 2 grupos de numero o primeiro de 2 e o segundo de 4, apos capturar o primeiro grupo ele adiciona uma barra antes do segundo grupo de numero
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1"); // captura 4 numeros não deixa ser digitado mais nada
};

// 0000-000
export const cepMask = value => {
  console.log("Dentro do cep");
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d{3})(\d)/, "$1-$2");
};


// Apenas números
export const numeroMask = value => {
  console.log("Dentro do número do endereço");
  return value.replace(/\D/g, "");
};

// 000.000.000-00
export const cpfMask = value => {
  console.log("Dentro do cpf");
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

// Aceita apenas que letras sejam digitadas
export const bMASK = value => {
  console.log("Dentro do bairro");
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

// Aceita apenas que letras sejam digitadas
export const cidMASK = value => {
  console.log("Dentro da cidade");
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

// (00) 0000-0000
export const telMask = value => {
  console.log("Dentro do telefone");
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d{4})(\d)/, "$1-$2");
};

// (00) 00000-0000
export const celMask = value => {
  console.log("Dentro do celular");
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
};

// Aceita apenas números
export const matMask = value => {
  console.log("Dentro da matricula");
  return value.replace(/\D/g, "");
};


const Aluno = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [data, setData] = useState("");
  const [cep,setCEP] = useState("");
  const [ref,setREF] = useState("");
  const [num,setNUM] = useState("");
  const [cpf,setCPF] = useState("");
  const [bairro,setBairro] = useState("");
  const [cidade,setCidade] = useState("");
  const [uf,setUF] = useState("");
  const [telefone,setTEL] = useState("");
  const [celular,setCEL] = useState("");
  const [matricula,setMatricula] = useState("");
  const [refresidencia,setRefresi] = useState("");
  const [estadocivil,setestCivil] = useState("");

  function mensagem(e) {
    console.log("#### Dados Recebidos ###");
    console.log(nome);
    console.log(email);
    console.log(endereco);
    console.log(data);
    console.log(cep);
    console.log(ref);
    console.log(num);
    console.log(cpf);
    console.log(bairro);
    console.log(cidade);
    console.log(uf);
    console.log(telefone);
    console.log(celular);
    console.log(matricula);
    console.log(refresidencia);
    console.log(estadocivil);
  }

  function limpar(e) {
    setNome("");
    setEmail("");
    setEndereco("");
    setData("");
    setCEP("");    
    setNUM("");
    setCPF("");
    setBairro("");
    setCidade("");
    setTEL("");
    setCEL("");
    setMatricula("");
    setRefresi("");
  }

  return (
    <div>
      <div className="CadastroAlunos">
        <div
          className="ContainerCadastro"
          style={({ marginTop: "30px" }, { marginLeft: "70px" })}
        >
          <h2>Cadastro de Alunos</h2>
        </div>
        <div
          className="Formulario"
          style={({ marginTop: "10px" }, { marginLeft: "80px" })}
        >
          <Form style={{ margin: "5px" }}>
            <Row>
              <Col sm={2}>
                <div className="txtMat">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  Matricula:
                  </Form.Label>
                  <Form.Control
                    value={matricula}
                    onChange={(e) => setMatricula(matMask(e.target.value))}
                    />
                </div>
              </Col>
              <Col sm={6}>
                <div className="txtNomeAluno">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Nome
                  </Form.Label>
                  <Form.Control
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
              </Col>
            </Row>            
            <Row>
              <Col sm={2}>
                <div className="comboSexo">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Sexo
                  </Form.Label>
                  <Form.Control as="select" defaultValue="Selecione...">
                    <option>Masculino</option>
                    <option>Feminino</option>
                  </Form.Control>
                </div>
              </Col>              
              <Col sm={2}>
                <div className="txtData">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  Data de Nascimento
                  </Form.Label>
                  <Form.Control
                    value={data}
                    onChange={(e) => setData(dataMask(e.target.value))}
                    />
                </div>
              </Col>
              <Col sm={2}>
                <div className="txtCPF">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  CPF
                  </Form.Label>
                  <Form.Control
                    value={cpf}
                    onChange={(e) => setCPF(cpfMask(e.target.value))}
                    />
                </div>
              </Col>
              <Col sm={2}>
                <div className="comboCivil">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Estado Civil
                  </Form.Label>
                  <Form.Control as="select" defaultValue="Selecione...">                    
                    <option>Solteiro(a)</option>
                    <option>Casado(a)</option>
                    <option>Divorciado(a)</option>
                    <option>Separado(a)</option>
                    <option>Viuvo(a)</option>
                  </Form.Control>
                </div>
              </Col>                      
            </Row>                         
            <Row>
              <Col sm={4}>
                <div className="txtEndereco">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Endereço
                  </Form.Label>
                  <Form.Control
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={1}>
                <div className="txtNum">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  Nº
                  </Form.Label>
                  <Form.Control
                    value={num}
                    onChange={(e) => setNUM(numeroMask(e.target.value))}
                    />
                </div>
              </Col>
              <Col sm={1}>
                <div className="comboRef">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Referencia
                  </Form.Label>
                  <Form.Control as="select" defaultValue="Selecione...">
                    <option>Casa</option>
                    <option>Apto</option>
                    <option>Coln</option>
                  </Form.Control>
                </div>
              </Col>
              <Col sm={2}>
                <div className="txtRefresi">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Nº Apto/Ref. Casa
                  </Form.Label>
                  <Form.Control
                    value={refresidencia}
                    onChange={(e) => setRefresi(e.target.value)}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <div className="txtBairro">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Bairro
                  </Form.Label>
                  <Form.Control
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={2}>
                <div className="txtCidade">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    Cidade
                  </Form.Label>
                  <Form.Control
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />
                </div>
              </Col>
              <Col sm={1}>
                <div className="comboUF">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    UF
                  </Form.Label>
                  <Form.Control as="select" defaultValue="Selecione...">
                  <option>AC</option>
                  <option>AL</option>
                  <option>AM</option>
                  <option>AP</option>
                  <option>BA</option>
                  <option>CE</option>
                  <option>DF</option>
                  <option>ES</option>
                  <option>GO</option>
                  <option>MA</option>
                  <option>MG</option>
                  <option>MS</option>
                  <option>MT</option>
                  <option>PA</option>
                  <option>PB</option>
                  <option>PE</option>
                  <option>PI</option>
                  <option>PR</option>
                  <option>RJ</option>
                  <option>RN</option>
                  <option>RO</option>
                  <option>RR</option>
                  <option>RS</option>
                  <option>SC</option>
                  <option>SE</option>
                  <option>SP</option>
                  <option>TO</option>
                  </Form.Control>
                </div>
              </Col>
              <Col sm={2}>
                <div className="txtCEP">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  CEP
                  </Form.Label>
                  <Form.Control
                    value={cep}
                    onChange={(e) => setCEP(cepMask(e.target.value))}
                    />
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={2}>
                <div className="txtTel">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  Telefone
                  </Form.Label>
                  <Form.Control
                    value={telefone}
                    onChange={(e) => setTEL(telMask(e.target.value))}
                    />
                </div>
              </Col>              
              <Col sm={2}>
                <div className="txtCel">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                  Celular
                  </Form.Label>
                  <Form.Control
                    value={celular}
                    onChange={(e) => setCEL(celMask(e.target.value))}
                    />
                </div>
              </Col>
              <Col sm={3}>
                <div className="txtEmail">
                  <Form.Label className="text-left" style={{ width: "100%" }}>
                    E-mail
                  </Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </Col>
            </Row>
            <br></br>
            <div>
              <Button onClick={() => limpar()} size="xl" variant="danger">
                Excluir
              </Button>{" "}
              <Button onClick={() => mensagem()} size="xl" variant="success">
                Salvar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Aluno;
