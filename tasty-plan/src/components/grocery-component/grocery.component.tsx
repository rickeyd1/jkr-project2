import * as React from 'react';
import { Component } from 'react';
import { IGroceryState, IState } from '../../reducers';
import { getUserGroceryList } from '../../actions/grocery.action';
import { connect } from 'react-redux';

export interface IGroceryComponentProps {
    groceries: IGroceryState;
    getUserGroceryList: () => void;
}
 
class GroceryComponent extends React.Component<IGroceryComponentProps> {

    componentDidMount = () => {
        this.props.getUserGroceryList();
    }
    
    render() {
        const stylesObj = {
            background: '#d1ffc2'
        };
        const gList = this.props.groceries.groceryList;
        // ${body2[0].ingredient.name}: ${body2[0].amount} ${body2[0].ingredient.foodType.units.unitName}
        return (
            <div style={stylesObj} className="mainContainer">
                <div id="myDIV" className="header">
                <h2>Grocery List</h2>
                </div>

                <ul id="myUL" className="grocery-list">
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">{gList && gList[0].ingredient.name}</h6><h6 className="list-font-size">{gList && `${gList[0].amount} ${gList[0].ingredient.foodType.units.unitName}`}</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Pay bills</h6><h6 className="list-font-size">Hello</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Meet George</h6><h6 className="list-font-size">Hello</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Buy eggs</h6><h6 className="list-font-size">Hello</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Read a book</h6><h6 className="list-font-size">Hello</h6></div></li>
                    <li className="list-option"><div className="innerDiv"><h6 className="list-font-size">Organize office</h6><h6 className="list-font-size">Hello</h6></div></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        groceries: state.groceries
    }
}

const mapDispatchToProps = {
    getUserGroceryList: getUserGroceryList
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryComponent);