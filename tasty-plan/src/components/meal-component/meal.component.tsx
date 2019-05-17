import React, { Component } from 'react';

export class MealComponent extends Component {

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