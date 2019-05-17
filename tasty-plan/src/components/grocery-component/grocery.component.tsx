import * as React from 'react';
import { Component } from 'react';
import { IGroceryState, IState } from '../../reducers';
import { getUserGroceryList, updateAmount } from '../../actions/grocery.action';
import { connect } from 'react-redux';
import { GroceryListItemComponent } from './grocery.list.item.component';

export interface IGroceryComponentProps {
    groceries: IGroceryState;
    getUserGroceryList: () => void;
    updateAmount: (event) => void;
}
 
class GroceryComponent extends React.Component<IGroceryComponentProps> {

    componentDidMount = () => {
        this.props.getUserGroceryList();
    }
    
    handleupdateAmount = (e) => {
        this.props.updateAmount(e);
    }

    render() {
        const stylesObj = {
            background: '#17bc7f'
        };
        const gList = this.props.groceries.groceryList;
        // ${body2[0].ingredient.name}: ${body2[0].amount} ${body2[0].ingredient.foodType.units.unitName}
        return (
            <div style={stylesObj} className="mainContainer">
                <div id="myDIV" className="header">
                <h2>Grocery List</h2>
                </div>

                <ul id="myUL" className="grocery-list">
                    {gList.map(list => (
                        <GroceryListItemComponent key={'list item- ' + list.id} groceryList={list} updateAmount={(e) => this.handleupdateAmount(e)} amount={this.props.groceries.amount} />
                    ))}
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
    getUserGroceryList: getUserGroceryList,
    updateAmount: updateAmount
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryComponent);