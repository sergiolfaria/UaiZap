import React from 'react';

function ItemMensagem({ mensagem, onDelete }) {
  return (
    <div className="item-mensagem">
      <span className="remetente">{mensagem.remetente}: </span>
      <span className="conteudo">{mensagem.conteudo}</span>
      <button className="botao-deletar" onClick={onDelete}>
        Deletar
      </button>
    </div>
  );
}

export default ItemMensagem;
