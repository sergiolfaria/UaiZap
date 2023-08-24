import React from 'react';
import ItemMensagem from './ItemMensagem';

function ListaMensagens({ mensagens, deletarMensagem }) {
  return (
    <div className="lista-mensagens">
      {mensagens.map((mensagem, indice) => (
        <ItemMensagem key={indice} mensagem={mensagem} onDelete={() => deletarMensagem(indice)} />
      ))}
    </div>
  );
}

export default ListaMensagens;
