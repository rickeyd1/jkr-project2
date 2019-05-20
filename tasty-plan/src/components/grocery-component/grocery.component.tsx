import * as React from 'react';
import { IGroceryState, IState, ILoginState } from '../../reducers';
import { getUserGroceryList, updateGroceryIngredient, deleteGroceryIngredient } from '../../actions/grocery.action';
import { connect } from 'react-redux';
import { GroceryListItemComponent } from './grocery.list.item.component';
import { User } from '../../model/user';

export interface IGroceryComponentProps {
    groceries: IGroceryState;
    user: ILoginState;
    getUserGroceryList: (user: User) => void;
    updateAmount: (event) => void;
    updateGroceryIngredient: (amount: number, id: number) => void;
    deleteGroceryIngredient: (id: number) => void
}
<<<<<<< HEAD
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
=======
 
class GroceryComponent extends React.Component<IGroceryComponentProps> {
>>>>>>> grocery-list

    componentDidMount = () => {
        this.props.getUserGroceryList(this.props.user.user);
    }

    render() {
        const stylesObj = {
            background: '#9ae681'
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
                        <GroceryListItemComponent key={'list item- ' + list.id} groceryList={list} 
                        updateGroceryIngredient={this.props.updateGroceryIngredient} user={this.props.user.user} deleteGroceryIngredient={this.props.deleteGroceryIngredient} getUserGroceryList={this.props.getUserGroceryList}/>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
        groceries: state.groceries,
        user: state.login
    }
}

const mapDispatchToProps = {
<<<<<<< HEAD
    grocery: Grocery
}
=======
    getUserGroceryList: getUserGroceryList,
    updateGroceryIngredient: updateGroceryIngredient,
    deleteGroceryIngredient: deleteGroceryIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceryComponent);
>>>>>>> grocery-list
