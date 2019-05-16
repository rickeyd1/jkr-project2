import * as React from 'react';
import { Component } from 'react';
import { IMenuState, IState } from '../../reducers';
import { toggleMenu } from '../../actions/menu.actions';
import { MenuButton } from './menu.button';
import MenuComponent from './menu.component';
import { connect } from 'react-redux'

export interface MenuContainerProps {
    menu: IMenuState,
    toggleMenu: () => void
}

// This class is where our nav-bar at the top of the screen lives.
// Use this class if you want to add something like the User's name when they login
class MenuContainer extends React.Component<MenuContainerProps> {

    handleMouseDown = (e) => {
        this.props.toggleMenu();

        console.log('I clicked');
        e.stopPropagation();
    }

    render() {
        const { visible } = this.props.menu
        return (
            <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light display-front nav-pad nav-background">
                <div className="navbar-header c-pointer shift-left">
                    <MenuButton handleMouseDown={(e) => this.handleMouseDown(e)} />
                    <MenuComponent handleMouseDown={(e) => this.handleMouseDown(e)} menuVisibility={visible}/>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        menu: state.menu
    }
}

const mapDispatchToProps = {
    toggleMenu: toggleMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);