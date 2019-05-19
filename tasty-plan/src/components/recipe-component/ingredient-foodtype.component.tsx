import { Ingredient } from "../../model/ingredient";
import React from "react";
import { FoodType } from "../../model/foodType";

interface IIngredientProps {
    foodType : FoodType
}

export class IngredientFoodTypeComponent extends React.Component<IIngredientProps> {

    handleChange = (e) => {
        console.log(e.target.value);
    }

    render() {
        const stylesObj = {
            background: '#9ae681'
        };
        return (
            <>
                <div style={stylesObj} className="mainContainer">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Create new Recipe</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            
                                        </div>
                                        <button type="submit" className="btn btn-lg btn-primary text-uppercase">Submit</button>
                                    </form>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}