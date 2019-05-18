import React, { Component } from 'react';
import { MealRowHeadTableComponent } from './meal-rowhead.component';
import { MealRowTableComponent } from './meal-row.component';

export class MealTableComponent extends Component {

    render() {
        return (
            <div>
                <h2 className="sub-header ">Current Meal Table</h2>
                <div className="col-lg-9 col-lg-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-inverse">
                               <MealRowHeadTableComponent/>
                            </thead>
                            <tbody>
                                <MealRowTableComponent/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}