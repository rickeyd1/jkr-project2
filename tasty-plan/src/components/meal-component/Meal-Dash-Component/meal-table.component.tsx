import React, { Component } from 'react';
import { MealRowHeadTableComponent } from './meal-rowhead.component';
import { Meal } from '../../../model/meal';

interface IMealTableProp {
    meal: Meal;
}
export class MealTableComponent extends Component<IMealTableProp> {

    render() {
        const meal = this.props.meal;
        return (
            <div>
                <h2 className="sub-header ">Current Meal Table</h2>
                <div className="col-lg-9 col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-inverse">
                                <MealRowHeadTableComponent />
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{meal.mealId}</td>
                                    <td>{meal.mealName}</td>
                                    <td>{meal.size}</td>
                                    <td><button >Recipe</button></td>
                                    <td>grid</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}