import React, { Component } from 'react';

export class MealCalendarComponent extends Component {

    render() {
        return (
            <div>
                    <div className="col-lg-6">
                    
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home1" role="tab" data-toggle="tab">Week</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#profile1" role="tab" data-toggle="tab">Next Week</a>
                        </li>

                    </ul>

                   
                    <div className="tab-content">
                        <br></br>
                        <div role="tabpanel" className="tab-pane active" id="home1">
                            <h4>Week</h4>
                            <p>
                                1. These Bootstrap 4 Tabs work basically the same as the Bootstrap 3.x tabs.
                               
                                <button className="btn btn-primary-outline btn-lg">Wow</button>
                            </p>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="profile1">
                            <h4>Next Week</h4>
                            <p>
                                2. Tabs are helpful to hide or collapse some addtional content.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}