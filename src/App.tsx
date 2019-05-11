import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './includes/bootstrap';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { DummyComponent } from './components/dummy.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/dummy' component={DummyComponent} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
