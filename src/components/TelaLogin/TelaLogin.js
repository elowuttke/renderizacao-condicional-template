import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {

  const enviarLogin = () => {
    alert("E-mail não encontrado, será necessário fazer o cadastro!")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>
      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>
        <StyledLabel>Senha:
          <Input type={"password"} />
        </StyledLabel>
        <SendButton onClick={enviarLogin}>Entrar</SendButton>
{/* Chame a função no onClick do botão “Cadastre-se”
Agora faça o mesmo para voltar para tela de login ao clicar no botão “Já possuo um cadastro” */}
        <RegisterButton onClick={() => props.mudarTela(2)}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
