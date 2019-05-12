import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './includes/bootstrap';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
<<<<<<< HEAD
import { DummyComponent } from './components/dummy.component';
=======
import { RecipeComponent } from './components/recipe-component/recipe.component';
>>>>>>> recipe-page

const App: React.FC = () => {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <BrowserRouter>
        <Route path='/dummy' component={DummyComponent} />
      </BrowserRouter>
    </Provider>
=======
    <BrowserRouter>
      <Route path="/recipe" component={RecipeComponent}/>
 </BrowserRouter>
 </Provider>
>>>>>>> recipe-page
  );
}

export default App;
