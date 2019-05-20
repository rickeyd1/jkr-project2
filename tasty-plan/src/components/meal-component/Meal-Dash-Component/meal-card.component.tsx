import React, { Component } from 'react';

export class MealCardComponent extends Component {

    render() {
        return (
            <div>
            <div className="mb-3">
                <div className="card-deck">
                    <div className="card card-inverse card-success text-center">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <p>Recipe the Meal button will dispaly here</p>
                                <footer>Sweet list <cite title="Source Title">Faster</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-inverse card-danger text-center">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <p>Recipe the Meal button will dispaly here</p>
                                <footer>Sweet list <cite title="Source Title">Sense</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-inverse card-warning text-center">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <p>Recipe the Meal button will dispaly here</p>
                                <footer>Sweet list <cite title="Source Title">Easy</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card card-inverse card-info text-center">
                        <div className="card-body">
                            <blockquote className="card-blockquote">
                                <p>Recipe the Meal button will dispaly here</p>
                                <footer>Sweet list <cite title="Source Title">Included</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}