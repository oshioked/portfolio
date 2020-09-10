import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MenuProvider from './contextTheme/MenuContext';

ReactDOM.render(
    <MenuProvider>
      <App/>      
    </MenuProvider>,
  document.getElementById('root')
);


serviceWorker.register();