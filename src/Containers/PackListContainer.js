import React, { Component } from 'react';
import ItemContainer from './ItemContainer'

class PackListContainer extends Component {

    state = {
        myItems: [],
        categories: [],
        clicked: false,
        itemName: '',
        itemCategory: ''
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/v1/categories')
        .then(resp=>resp.json())
        .then(data=>this.setState({categories: data}))

        fetch('http://localhost:4000/api/v1/items')
        .then(resp=>resp.json())
        .then(items=>this.setState({myItems: items.filter(item=>{
            // console.log(this.props.trip.id.toString())
            return(
            item.user_id === localStorage.user_id && 
            item.trip_id === this.props.trip.id.toString()
            )
        })}))
    }

    handleBtnClick = ()=>{
        this.setState({ clicked: !this.state.clicked})
    }

    handleChange = (e)=>{
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleSelectChange = (e) => {
        e.persist()
        this.setState({
            itemCategory: e.target.selectedIndex
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        fetch('http://localhost:4000/api/v1/items', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                trip_id: this.props.trip.id,
                category_id: this.state.itemCategory,
                name: this.state.itemName,
                packed: false,
                user_id: localStorage.user_id
            })
        })
        .then(resp=>resp.json())
        .then(data=>this.setState({
            myItems: [...this.state.myItems, data],
            clicked: false
        }))
    }
    
    render() {
        console.log(this.state.myItems)
        return (
            <>
                <div className="pack-list-container">
                    {   this.state.myItems !== null
                        ?
                        <ItemContainer myItems={this.state.myItems} trip={this.props.trip} handleBtnClick={this.handleBtnClick}/>
                        :
                        ""
                    }
                </div>
                {   this.state.categories !== null
                    ?
                        this.state.clicked
                        ?
                        <div className="item-form">
                            <form onSubmit={this.handleSubmit}>
                                <p className="form-title">Add Item</p>
                                <input  type="text" 
                                        name="itemName" 
                                        placeholder="Item Name" 
                                        onChange={this.handleChange} 
                                        className="item-input"
                                        />
                                <select 
                                        onChange={this.handleSelectChange} 
                                        name='itemCategory'>
                                    <option default>Select</option>
                                    {this.state.categories.map(category=><option value={category.name} id={category.id}>{category.name}</option>)}
                                </select>
                                <input type="submit" value="Submit" className="item-submit"/>
                            </form>
                            <button onClick={this.handleBtnClick}>Cancel</button>
                        </div>
                        :
                        ''
                    :
                    ''
                }
            </>
        );
    }
}

export default PackListContainer;