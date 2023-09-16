import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Estilo global
const GlobalStyle = createGlobalStyle`
  body {
    //background: linear-gradient(0deg, rgb(7 36 18) 0%, rgb(33 131 55) 34%, rgb(60 255 134) 67%, rgb(56 255 130) 100%);
  }
`;

function Estiloglobal() {
  return (
    <div>
    
      <GlobalStyle /> 
    </div>
  );
}

export default Estiloglobal;
