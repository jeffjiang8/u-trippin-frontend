import React, { Component } from 'react';
import ItemCard from '../Components/ItemCard'

class ItemContainer extends Component {
    render() {
        console.log(this.props)
        // debugger&& this.state.myItems !== []
        return (
            <ul className="item-list">
                {
                    this.props.myItems !== undefined && this.props.myItems !== []
                    ?
                    this.props.myItems.sort((a, b)=> a.id - b.id).map(item=><ItemCard key={item.id} item={item} trip={this.props.trip} handleDelete={this.props.handleDelete}/>)
                    :
                    ""
                }
                <li className="add-item" onClick={this.props.handleBtnClick}><span>+</span></li>
            </ul>
        );
    }
}

export default ItemContainer;