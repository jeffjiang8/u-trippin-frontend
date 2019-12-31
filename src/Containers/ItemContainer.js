import React, { Component } from 'react';
import ItemCard from '../Components/ItemCard'

class ItemContainer extends Component {
    render() {
        console.log(this.props)
        return (
            <ul className="item-list">
                {
                    this.props.myItems !== undefined 
                    ?
                    this.props.myItems.map(item=><ItemCard key={item.id} item={item} />)
                    :
                    ""
                }
                <li className="add-item" onClick={this.props.handleBtnClick}><span>+</span></li>
            </ul>
        );
    }
}

export default ItemContainer;