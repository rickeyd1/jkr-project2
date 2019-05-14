import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './includes/bootstrap';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { DummyComponent } from './components/dummy.component';
import { RecipeComponent } from './components/recipe-component/recipe.component';
import { ProfileComponent } from './components/profile-component/profile.component';
import logInComponent from './components/log-component/log-in.component';
import { IngredientComponent } from './components/ingredient-component/ingredient.component';
import { MealComponent } from './components/meal-component/meal.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/dummy' component={DummyComponent} />
        <Route path="/recipe" component={RecipeComponent} />
        <Route path="/profile" component={ProfileComponent} />
        <Route path="/login" component={logInComponent} />
        <Route path="/ingredient" component={IngredientComponent} />
        <Route path="/meal" component={MealComponent} />
        <Route exact path="/" component={logInComponent} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
