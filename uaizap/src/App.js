import React, { useState } from 'react';
import ListaMensagens from './components/ListaMensagens';
import FormularioMensagem from './components/FormularioMensagem';
import Estiloglobal from './components/estilo-global';
import styled from 'styled-components';
import imageUrl from './img/download.png'



const ContainerMensagens = styled.div`
  background-image: url(${imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 50%;
  margin:0 auto;
  min-height: 100vh;
  padding: 0px 30px 0px 30px;
  position: relative; 
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, rgb(7 36 18) 0%, rgb(33 131 55) 34%, rgb(49 187 101) 67%, rgb(56 255 130) 100%); 
    z-index: -1;
  }
`;


const FormularioContainer = styled.div`
  padding: 20px;
  border-radius: 20px;
  background-color: #1F2C34;
  border-top: 1px solid black;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
  margin-top: auto;
  margin-bottom:1%;
  width: 100%; 
`;
const MsgContainer = styled.div`
   margin-top: auto;
   display: flex;
   justify-content:center;
`;

function App() {
  const [mensagens, setMensagens] = useState([]);

  const adicionarMensagem = (mensagem) => {
    setMensagens([...mensagens, mensagem]);
  };

  const deletarMensagem = (indice) => {
    const novasMensagens = mensagens.filter((_, i) => i !== indice);
    setMensagens(novasMensagens);
  };

  return (
    <ContainerMensagens>
      <Estiloglobal/>
      <ListaMensagens mensagens={mensagens} deletarMensagem={deletarMensagem} />
      <MsgContainer>
        <FormularioContainer alinhamentoPersonalizado>
          <FormularioMensagem adicionarMensagem={adicionarMensagem} />
        </FormularioContainer>
      </MsgContainer>
    </ContainerMensagens>
  );
}

export default App;
