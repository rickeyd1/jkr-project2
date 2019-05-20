import * as React from 'react';

export interface MenuButtonProps {
    handleMouseDown: (e) => void
}

// This is what displays our cool button at the top-left of the screen
export class MenuButton extends React.Component<MenuButtonProps> {
    render() { 
        return (
            <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}