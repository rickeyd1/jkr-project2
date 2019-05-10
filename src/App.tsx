import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './includes/bootstrap';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <main id="container">
            Hello
      </main>
 </BrowserRouter>
 </Provider>
  );
}

export default App;
