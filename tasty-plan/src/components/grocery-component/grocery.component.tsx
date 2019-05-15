import * as React from 'react';
import { Component } from 'react';

export interface GroceryComponentProps {
    
}
 
export class GroceryComponent extends React.Component<GroceryComponentProps> {
    render() {
        return (
        <div className="container">
            <div className="codrops-top clearfix">
                <a className="codrops-icon codrops-icon-prev" href="http://tympanus.net/Development/CreativeLinkEffects/"><span>Previous Demo</span></a>
                <span className="right"><a className="codrops-icon codrops-icon-drop" href="http://tympanus.net/codrops/?p=16114"><span>Back to the Codrops Article</span></a></span>
            </div>
            <div className="component">
                <button className="cn-button" id="cn-button">+</button>
                <div className="cn-wrapper" id="cn-wrapper">
                    <ul>
                    <li><a href="#"><span className="icon-picture"></span></a></li>
                    <li><a href="#"><span className="icon-headphones"></span></a></li>
                    <li><a href="#"><span className="icon-home"></span></a></li>
                    <li><a href="#"><span className="icon-facetime-video"></span></a></li>
                    <li><a href="#"><span className="icon-envelope-alt"></span></a></li>
                    </ul>
                </div>
                <div id="cn-overlay" className="cn-overlay"></div>
            </div>
        </div>
        )
    }
}