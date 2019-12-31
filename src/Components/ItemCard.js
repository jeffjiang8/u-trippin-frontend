import React, { Component } from 'react';

class ItemCard extends Component {

    handleItemClick = (item)=>{
        item.packed = !item.packed
    
        fetch(`http://localhost:4000/api/v1/items/${item.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                trip_id: item.trip_id,
                category_id: item.category_id,
                name: item.name,
                packed: item.packed,
                user_id: item.user_id,
            })
        })
        .then(resp=>resp.json)
        .then(items=>this.setState({ myItems: items, loading: false }))
    }

   

    render() {
        console.log(this.props.trip)
        const { category_id, name, packed } = this.props.item
        return (
            <li 
                className="item" 
                style={{ backgroundColor: packed ? "rgba(21, 187, 21, 0.6)":"rgba(70, 70, 70, 0.3)"}}
                ><span onClick={()=>this.handleItemClick(this.props.item)}>{name}</span> <img src={`http://localhost:3000/images/${category_id}.png`} alt="meh"/> <span onClick={()=>this.props.handleDelete(this.props.item)}>X</span></li>
        );
    }
}

export default ItemCard;