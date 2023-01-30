import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  // Crie o estado para guardar o valor a ser verificado na condicional.
  const [condicional, setCondicional] = useState(1);

  // Crie uma função que vai mudar o valor do estado.
  // Passe essa função para o componente TelaLogin por props.
  const mudarTela = (condicional) => setCondicional(condicional);
  // if (condicional === 1) {
  //   setCondicional(2);
  // } else {
  //   setCondicional(1);
  // }
  // };

  const renderizaTela = () => {
    // return condicional === 1 ? (
    //   <TelaLogin mudarTela={mudarTela} />
    // ) : (
    //   <TelaCadastro mudarTela={mudarTela} />
    // );
    switch (condicional) {
      case 1:
        return <TelaLogin mudarTela={mudarTela} />;
      case 2:
        return <TelaCadastro mudarTela={mudarTela} />;
      case 3:
        return <TelaUsuarioCadastrado mudarTela={mudarTela} />;
      default:
        return "Página não encontrada.";
    }
  };

  return (
    <MainContainer>
      <GlobalStyled />
      {renderizaTela()}
      {/* Crie uma verificação de condicional para decidir qual componente vai ser renderizado. */}
      {/* {condicional === 1 ? <TelaLogin mudarTela={mudarTela}/> : <TelaCadastro mudarTela={mudarTela}/>} */}
      {/* <TelaLogin />
      <TelaCadastro /> */}
    </MainContainer>
  );
}

export default App;
