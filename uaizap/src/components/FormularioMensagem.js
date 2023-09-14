import React, { useState } from 'react';
import styled from 'styled-components';

const Formulario = styled.form`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70.1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1F2C34;
  padding: 10px;
  border-top: 1px solid black;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex: 1;
  padding: 15px;
  border: none;
  color: #ffff;
  border-radius: 8px;
  background-color: #2a3942;
  font-size: 14px;
  margin-right: 10px;
`;

const BotaoEnviar = styled.button`
  border: none;
  background-color: #128c7e;
  color: #fff;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

function FormularioMensagem({ adicionarMensagem }) {
  const [remetente, setRemetente] = useState('');
  const [conteudo, setConteudo] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    if (remetente && conteudo) {
      adicionarMensagem({ remetente, conteudo });
      setRemetente('');
      setConteudo('');
    }
  };

  return (
    <Formulario onSubmit={Submit}>
      <Input
        type="text"
        placeholder="Remetente"
        value={remetente}
        onChange={(e) => setRemetente(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite uma mensagem..."
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
      />
      <BotaoEnviar type="submit">Enviar</BotaoEnviar>
    </Formulario>
  );
}

export default FormularioMensagem;
