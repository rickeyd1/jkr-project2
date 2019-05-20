import React, { PureComponent } from 'react';


interface IMealCountProps {
    count: number;
}

export class MealCountComponent extends PureComponent<IMealCountProps> {

    render() {
        console.log(this.props.count);
        return (
            <div>
                       <div className="col main pt-5 mt-3">
            <h1 className="display-4 d-none d-sm-block">
            Meal Planning Dashboard!
            </h1>
            <p className="lead d-none d-sm-block">Powered by Bootstrap v4</p>

            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>Holy guacamole!</strong> It's free.. this is an example theme.
            </div>
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success">
                            <div className="rotate">
                                <i className="fa fa-user fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Recipes</h6>
                            <h1 className="display-4">7</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-list fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Meals</h6>
                            <h1 className="display-4">{this.props.count}</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fa fa-twitter fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Tweets</h6>
                            <h1 className="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-share fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Shares</h6>
                            <h1 className="display-4">36</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}