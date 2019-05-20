import { Component } from "react";
import { connect } from "react-redux";
import { IState } from "../../reducers";
import { Grocery } from "../../model/grocery";


interface IGroceryProps {

}
export class GrocerComponent extends Component<IGroceryProps, any> {
    constructor(props) {
        super(props)
        //Set state to props here
    }
    //Storing new List to GroceryList in Store
    StoreList = (e) => {

    }

    //Grabbing current Recipe from user session
    componentDidMount = async () => {

    }

    //Add new items
    AddListItem = (e) => {

    }
    //Removing items
    removeListItem = (e) => {

    }



    render() {
        return (
            <div>
               Grocery list
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        grocery: state.grocery.grocery
    }
}

const mapDispatchToProps = {
    grocery: Grocery
}