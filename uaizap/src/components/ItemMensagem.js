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
  cursor:pointer;
`;

const BackgroundDaMsg = styled.div`
  background-color: ${({ SouEu }) => (SouEu ? '#128c7e' : '#2a3942')};
  padding: 1vh;
  border-radius: 8px;
  cursor:pointer;
`;


function ItemMensagem({ mensagem, onDelete }) {
 
  const SouEu = mensagem.remetente.toLowerCase().trim() === 'eu';

  return (
    <MensagemContainer SouEu={SouEu}>
      <BackgroundDaMsg SouEu={SouEu}>
        {!SouEu && <Remetente>{mensagem.remetente} :</Remetente>}
        <ConteudoMensagem onDoubleClick={onDelete} SouEu={SouEu}>{mensagem.conteudo}</ConteudoMensagem>
      </BackgroundDaMsg>
      
    </MensagemContainer>
  );
}

export default ItemMensagem;
