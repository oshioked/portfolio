import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MenuProvider from './contextTheme/MenuContext';

ReactDOM.render(
  <React.StrictMode>
    <MenuProvider>
      <App/>      
    </MenuProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
