import React, { Component } from 'react';
import { User } from '../../model/user';
import { Recipe } from '../../model/recipe';

interface IMealState {
    meal: Meal
}

interface IMealProps {
    currentUser: User,
    recipe: Recipe,
}

export class MealComponent extends Component<IMealProps, IMealState> {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount = async () => {
    const resp = await fetch("http://localhost:8080/meal/mealall", {
        method: 'GET',
        credentials: 'include'
    });
    const body = await resp.json();
    console.table(body);
    }

    render() {
        return (
            <div>
                This is a meal page!
            </div>
        )
    }
}