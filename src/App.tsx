import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './includes/bootstrap';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { ProfileComponent } from './components/profile-component/profile.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Route path="/profile" component={ProfileComponent}/>
 </BrowserRouter>
 </Provider>
  );
}

export default App;
