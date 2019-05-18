import React from 'react';
import { Route, Router } from 'react-router-dom';
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
import history from './util/history';
import  MenuContainer  from './components/menu-component/menu.container';
import GroceryComponent from './components/grocery-component/grocery.component';
import SignUpComponent from './components/log-component/sign-up.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
