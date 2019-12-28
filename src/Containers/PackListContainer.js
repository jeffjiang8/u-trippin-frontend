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
        .then(items=>this.setState({myItems: items.filter(item=>item.user_id === localStorage.user_id )}))
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
    
    render() {
        console.log(this.state.itemName, this.state.itemCategory)
        return (
            <div className="pack-list-container">
                {   this.state.myItems !== null
                    ?
                    <ItemContainer myItems={this.state.myItems} trip={this.props.trip}/>
                    :
                    ""
                }
                {   this.state.categories !== null
                    ?
                        this.state.clicked
                        ?
                        <div className="item-form">
                            <form>
                                <input type="text" name="itemName" placeholder="Item Name" onChange={this.handleChange}></input>
                                <select onChange={this.handleChange} name='itemCategory'>
                                    <option default>Select</option>
                                    {this.state.categories.map(category=><option value={category.name} id={category.id}>{category.name}</option>)}
                                </select>
                                {/* <input type="submit">Submit</input> */}
                            </form>
                        </div>
                        :
                        ''
                    :
                    ''
                }
                <div className="add-item" onClick={this.handleBtnClick}><span>+</span></div>
            </div>
        );
    }
}

export default PackListContainer;