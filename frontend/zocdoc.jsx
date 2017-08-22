import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("onDocumentLoaded", () => {

  

  const root = document.getElementbyId('root');
  ReactDOM.render(<h1>MockDoc</h1>, root);
});
