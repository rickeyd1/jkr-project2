import React, { Component } from 'react';
import { Meal } from '../../../model/meal';
import { Recipe } from '../../../model/recipe';
import { User } from '../../../model/user';
import { MealCalendarComponent } from './meal-calender.component';
import { MealCardComponent } from './meal-card.component';
import { MealCountComponent } from './meal-count.component';
import { MealTableComponent } from './meal-table.component';
import { Link } from 'react-router-dom';

interface IMealState {
    meal: Meal[];
    count: number;
}

interface IMealProps {
    currentUser: User,
    recipe: Recipe,
}

export class MealComponent extends Component<IMealProps, IMealState> {
    constructor(props) {
        super(props)
        this.state = {
            meal: [],
            count: 0
        }
    }

    componentDidMount = async () => {
        const resp = await fetch("http://localhost:8080/meal/mealall", {
            method: 'GET',
            credentials: 'include'
        });
        const body = await resp.json();
        console.table(body);
        this.setState({
            meal: body
        });
        this.setState({
            count: this.state.meal.length
        })
    }

    render() {
        const meal = this.state.meal;
        
        const stylesObj = {
            background: '#9ae681'
        };
        return (
            <div style={stylesObj} className="mainCOntainer">
                <div className="container-fluid" id="main">
                    <div className="row row-offcanvas row-offcanvas-left">
                    </div>
                    <MealCountComponent count={this.state.count}/>

                    <p className="lead mt-5">
                        Welcome to the meal page! Top four panels will show you how many recipes you have
                        as well as meals, tweets and shares! The table below will display all your meals
                        in order from most recent to less recent.
                    </p>
                    <div className="row my-4">
                        <div className="col-lg-3 col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Make a new meal!</h4>
                                    <p className="card-text">Want to make a new meal! Save it for future use.</p>
                                    <button className="btn btn-primary">New Meal</button>
                                    <Link to="/newmeal"> New Meal </Link>
                                </div>
                            </div>
                            <div className="card card-inverse bg-inverse mt-3">
                                <div className="card-body">
                                    <h3 className="card-title">Tips</h3>
                                    <p className="card-text">Feeling down and want some our help. Well we have a checkbox in your profile for you to start using our tips to make a better meal planning.</p>
                                    <button className="btn btn-outline-secondary">Settings</button>
                                </div>
                            </div>
                        </div>
                        {meal.map(meal => (
                        <MealTableComponent key={'meal-'+ meal.mealId} meal={meal} /> 
                        ))}
                        
                    </div>

                    <h2 className="sub-header mt-5">Current Recipe cards</h2>
                    <MealCardComponent />


                    <h2 className="mt-5">Calendar</h2>
                    <MealCalendarComponent />

                    <footer className="container-fluid">
                        <p className="text-right small">©2016-2018 Company</p>
                    </footer>


                </div>
            </div>
        )
    }
}