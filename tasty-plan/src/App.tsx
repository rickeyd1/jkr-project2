import React from 'react';
import { Route, Router } from 'react-router-dom';
import './includes/bootstrap';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import logInComponent from './components/log-component/log-in.component';
import { IngredientComponent } from './components/ingredient-component/ingredient.component';
import { MealComponent } from './components/meal-component/meal.component';
import history from './util/history';
import RecipeComponent from '../src/components/recipe-component/recipe.component';
import RecipeContainer from './components/recipe-component/recipe-container.component';

=======
import  MenuContainer  from './components/menu-component/menu.container';
import GroceryComponent from './components/grocery-component/grocery.component';
import SignUpComponent from './components/log-component/sign-up.component';
//import RecipeContainer from './components/recipe-component/recipe-container.component';
>>>>>>> grocery-list

const App: React.FC = () => {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <Router history={history}>
      <NavComponent></NavComponent>
        <Route path="/recipe" component={RecipeComponent} />
        <Route path="/allRecipes" component={RecipeContainer} />
        <Route path="/login" component={logInComponent} />
        <Route path="/ingredient" component={IngredientComponent} />
        <Route path="/meal" component={MealComponent} />
        <Route exact path="/" component={logInComponent} />
      </Router>
=======
        <Router history={history}>
          <MenuContainer />
          <Route path='/dummy' component={DummyComponent} />
          <Route path="/recipe" component={RecipeComponent} />
          <Route path="/grocery" component={GroceryComponent} />
          <Route path="/profile" component={ProfileComponent} />
          <Route path="/login" component={logInComponent} />
          <Route path="/signup" component={SignUpComponent} />
          <Route path="/ingredient" component={IngredientComponent} />
          <Route path="/meal" component={MealComponent} />
          <Route exact path="/" component={logInComponent} />
        </Router>
>>>>>>> grocery-list
    </Provider>
  );
}

export default App;
