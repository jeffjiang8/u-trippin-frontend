import React, { Component } from 'react';
import ItemCard from '../Components/ItemCard'

class ItemContainer extends Component {
    render() {
        console.log(this.props.trip)
        return (
            <ul className="item-list">
                
            </ul>
        );
    }
}

export default ItemContainer;