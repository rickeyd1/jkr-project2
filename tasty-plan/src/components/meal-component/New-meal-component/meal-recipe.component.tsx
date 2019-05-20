import React, { PureComponent } from "react";

export class MealRecipeDropComponent extends PureComponent {
    render() {
        return (
            <>
                <a className="dropdown-item" href="#">Recipe 1</a>
                <a className="dropdown-item" href="#">Recipe 2</a>
                <a className="dropdown-item" href="#">Recipe 3</a>
            </>
        )
    }
}