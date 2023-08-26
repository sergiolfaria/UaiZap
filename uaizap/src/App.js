import React, { useState } from 'react';
import ListaMensagens from './components/ListaMensagens';
import FormularioMensagem from './components/FormularioMensagem';


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
    <div>
    
  
      <ListaMensagens mensagens={mensagens} deletarMensagem={deletarMensagem} />
      <FormularioMensagem adicionarMensagem={adicionarMensagem} />
    </div>
  );
}

export default App;
