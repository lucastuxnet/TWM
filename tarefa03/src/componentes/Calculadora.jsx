import React,{useState} from 'react'


function Calculadora() {
  
  // States 

  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operado,setOperado]=useState(false)
  
  //***Componentes*****

  // Tela

  const Tela=(valor,res)=>{
    return(
      <div style={cssTela}>
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    )
  }

  // Botão
  const Btn=(label,onClick)=>{
      return(
          <button style={cssBtn} onClick={onClick}>{label}</button>
      )
  }

  // Funções

  // Operações +-*/
  const addDigitoTela=(d)=>{
      if((d=='+' || d=='-' || d=='*' || d=='/') && operado){
          console.log('+-*/')
          setOperado(false)
          setValorTela(resultado+d)
          return
      }
      if(operado){
          setValorTela(d)
          setOperado(false)
          return
      }
      const valorDigitadoTela=valorTela+d
      setValorTela(valorDigitadoTela)
    }
    // Limpar tela AC
  const limpaMemoria=()=>{
      setOperado(false)
      setValorTela('')
      setResultado(0)
      setAcumulador(0)
      return
    }
    const Operacao=(oper)=>{
        if(oper=='bs'){
            let vtela=valorTela
            vtela=vtela.substring(0,(vtela.length-1))
            setValorTela(vtela)
            setOperado(false)
            return
        }
        try{
            const r=eval(valorTela) // Calculo
            setAcumulador(r)
            setResultado(r)
            setOperado(true)
            return
        }catch{
            setResultado('ERRO')
        }

    }
    

  // Estilos

  const cssConteiner={
      display:'grid',
      justifyContent:'flex-start',
      alignItems:'center',
      flexDirection:'column',
      backgroundColor:'#000',
      width:300,
      height:320,
      fonteSize:15,
      marginLeft:'auto',
      marginRight:'auto',
      color:'#fff',

      border:'1px solid #800080'
  }

  const cssBotoes={
      flexDirection:'row',
      flexWrap:'wrap'
  }

  const cssTela={
      display:'flex',
      fonteSize:40,
      paddingLeft:20,
      paddingRight:20,
      justifyContent:'center',
      alignItems:'flex-end',
      backgroundColor:'#8a2be2',
      flexDirection:'column',
      width:260
  }
  const cssTelaOper={
      fonteSize:25,
      color:'#fff',
      height:20
  }
  const cssTelaRes={
      fontesize:50,
      color:'#fff',
      height:20
  }

  const cssBtn={
      fonteSize:30,
      height:75,
      width:75,
      padding:20,
      backgroundColor:'#000',
      color:'#fff',
      textAlign:'center',
      outline:'none'
  }


  return (
      <>
        <div style={cssConteiner}>
            <h1>Cacluladora TWM</h1>
            {Tela(valorTela,resultado)}
            <div style={cssBotoes}>
                {Btn('AC',limpaMemoria)}
                {Btn('(',()=>addDigitoTela('('))}
                {Btn(')',()=>addDigitoTela(')'))}
                {Btn('/',()=>addDigitoTela('/'))}
                {Btn('7',()=>addDigitoTela('7'))}
                {Btn('8',()=>addDigitoTela('8'))}
                {Btn('9',()=>addDigitoTela('9'))}
                {Btn('*',()=>addDigitoTela('*'))}
                {Btn('4',()=>addDigitoTela('4'))}
                {Btn('5',()=>addDigitoTela('5'))}
                {Btn('6',()=>addDigitoTela('6'))}
                {Btn('-',()=>addDigitoTela('-'))}
                {Btn('1',()=>addDigitoTela('1'))}
                {Btn('2',()=>addDigitoTela('2'))}
                {Btn('3',()=>addDigitoTela('3'))}
                {Btn('+',()=>addDigitoTela('+'))}
                {Btn('0',()=>addDigitoTela('0'))}
                {Btn('.',()=>addDigitoTela('.'))}
                {Btn('<',()=>Operacao('bs'))}
                {Btn('=',()=>Operacao('='))}
            </div>
        </div>
      </>

  );
}

export default Calculadora;
