import React, { Component } from 'react';

class ItemCard extends Component {
    render() {
        console.log(this.props.item)

        const { category_id, name } = this.props.item
        return (
            <li className="item">{name} <img src={`http://localhost:3000/images/${category_id}.png`} alt="meh"/></li>
        );
    }
}

export default ItemCard;