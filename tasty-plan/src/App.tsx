import React from 'react';
import { Route, Router } from 'react-router-dom';
import './includes/bootstrap';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import logInComponent from './components/log-component/log-in.component';
import { IngredientComponent } from './components/ingredient-component/ingredient.component';
import { MealComponent } from './components/meal-component/Meal-Dash-Component/meal.component';
import history from './util/history';

import RecipeContainer from './components/recipe-component/recipe-container.component';



import  MenuContainer  from './components/menu-component/menu.container';
//import RecipeContainer from './components/recipe-component/recipe-container.component';
import GroceryComponent from './components/grocery-component/grocery.component';
import SignUpComponent from './components/log-component/sign-up.component';
import RecipeContainerComponent from './components/recipe-component/recipe-container.component';
import RecipeComponent from './components/recipe-component/recipe.component';
import { MealCreateComponent } from './components/meal-component/New-meal-component/meal-create.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <Router history={history}>
          <MenuContainer />
          <Route path="/newmeal" component={MealCreateComponent} />
          <Route path="/grocery" component={GroceryComponent} />
          <Route path="/login" component={logInComponent} />
          <Route path="/signup" component={SignUpComponent} />
          <Route path="/recipe" component={RecipeComponent} />
          <Route path="/allRecipes" component={RecipeContainerComponent} />
          <Route path="/meal" component={MealComponent} />
          <Route exact path="/" component={logInComponent} />
        </Router>
    </Provider>
  );
}

export default App;
