import React, { Component } from 'react';

export class MealRowHeadTableComponent extends Component {
    render() {
        return (
            <tr>
                 <th>#</th>
                    <th>Label</th>
                    <th>Header</th>
                    <th>Column</th>
                    <th>Data</th>
            </tr>
        )
    }
}