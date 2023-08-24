import React, { useState } from 'react';
import './form.css'
function FormularioMensagem({ adicionarMensagem }) {
  const [remetente, setRemetente] = useState('');
  const [conteudo, setConteudo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (remetente && conteudo) {
      adicionarMensagem({ remetente, conteudo });
      setRemetente('');
      setConteudo('');
    }
  };

  return (
    <form className="formulario-mensagem" onSubmit={handleSubmit}>
      <input
        className="imput-bonito"
        type="text"
        placeholder="Remetente"
        value={remetente}
        onChange={(e) => setRemetente(e.target.value)}
      />
      <input
        type="text"
        placeholder="Conteúdo da mensagem"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioMensagem;
