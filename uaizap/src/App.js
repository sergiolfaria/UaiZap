import React, { useState } from 'react';
import ListaMensagens from './components/ListaMensagens';
import FormularioMensagem from './components/FormularioMensagem';
import styled from 'styled-components';


const Container = styled.div`
  border: none;
  color: #fff;
  padding: 10px;
  background-color: #fff;
  width: 70%;
  height: 96vh;
`;

const Div2 = styled.div`
  display:flex;
  justify-content:center;
`
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
    <Div2>
      <Container>
        <ListaMensagens mensagens={mensagens} deletarMensagem={deletarMensagem} />

      </Container>
      <FormularioMensagem adicionarMensagem={adicionarMensagem} />
    </Div2>
  );
}

export default App;
