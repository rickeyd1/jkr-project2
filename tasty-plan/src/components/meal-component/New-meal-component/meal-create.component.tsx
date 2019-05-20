import React, { Component } from 'react';
import { Meal } from '../../../model/meal';
import { User } from '../../../model/user';
import { Recipe } from '../../../model/recipe';
import { MealRecipeDropComponent } from './meal-recipe.component';
import { Link } from 'react-router-dom';

interface IMealProps {
    currentUser: User,
    recipe: Recipe,
}

export class MealCreateComponent extends Component<IMealProps> {
    constructor(props) {
        super(props)
        this.state = {
            meal: [],
            count: 0
        }
    }

    render() {

        const stylesObj = {
            background: '#9ae681'
        };
        return (
        <div style={stylesObj} className="mainContainer">
          <div className="modal-dialog cascading-modal" role="document">
            <div className="modal-content">
              <div className="modal-c-tabs">
                <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#panel7" role="tab">
                        <i className="fas fa-user mr-1"></i> 
                    New Meal</a>
                      </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                    <div className="modal-body mb-1">

                      <div className="md-form form-sm mb-2">
                          <p className="MealName">Name of a meal</p>
                          <input type="text" id="modalLRInput10" className="form-control form-control-sm validate" />
                      </div>

                      <div className="md-form form-sm mb-2">
                          <p className="Meal Size">Size of a meal</p>
                          <input type="text" id="modalLRInput11" className="form-control form-control-sm validate" />
                      </div>

                      <div className="md-form form-sm mb-2">
                      <p className="RecipesList">List of Recipes</p>
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Recipe List
                            </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <MealRecipeDropComponent/>
                        </div>
                      </div>
                      
                    </div>
                    
                      <div className="text-center mt-2">
                      <p className="RecipesList">Create Meal</p>
                        <button className="btn btn-info">Submit<i className="fas fa-sign-in ml-1"></i></button>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <div className="options text-center text-md-right mt-1">
                        <p>Add Recipes <Link to="/recipe">Recipes</Link></p>
                        <p>Add Ingredients <Link to="/ingredient">Ingredients</Link></p>
                      </div>
                        <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Go Back</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="" className="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalLRForm">Launch
              Modal LogIn/Register</a>
          </div>
        </div>
        )
    }
}
