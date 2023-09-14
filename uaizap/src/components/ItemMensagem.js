import React from 'react';
import styled from 'styled-components';

const MensagemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ SouEu }) => (SouEu ? 'flex-end' : 'flex-start')};
  align-items: center;
  margin: 10px;
`;

const Remetente = styled.span`
  font-weight: bold;
  color: #fff;
`;

const ConteudoMensagem = styled.span`
  color: #ddd;
  background-color: ${({ SouEu }) => (SouEu ? '#128c7e' : '#2a3942')};
  padding: 1vh;
  border-radius: 8px;
`;

const BackgroundDaMsg = styled.div`
  background-color: ${({ SouEu }) => (SouEu ? '#128c7e' : '#2a3942')};
  padding: 1vh;
  border-radius: 8px;
`;

const BotaoDeletar = styled.button`
  border: none;
  background-color: #128c7e;
  color: #ddd;
  font-size: 12px;
  cursor: pointer;
  padding: 1vh;
  border-radius: 8px;
`;

function ItemMensagem({ mensagem, onDelete }) {
  const SouEu = mensagem.remetente === 'eu';

  return (
    <MensagemContainer SouEu={SouEu}>
      <BackgroundDaMsg SouEu={SouEu}>
        {!SouEu && <Remetente>{mensagem.remetente} :</Remetente>}
        <ConteudoMensagem SouEu={SouEu}>{mensagem.conteudo}</ConteudoMensagem>
      </BackgroundDaMsg>
      <BotaoDeletar onClick={onDelete}>Deletar</BotaoDeletar>
    </MensagemContainer>
  );
}

export default ItemMensagem;
