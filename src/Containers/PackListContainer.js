import React, { Component } from 'react';
import ItemContainer from './ItemContainer'

class PackListContainer extends Component {

    state = {
        myItems: [],
        categories: []
    }

    componentDidMount(){
        fetch('http://localhost:4000/api/v1/categories')
        .then(resp=>resp.json())
        .then(data=>this.setState({categories: data}))

        fetch('http://localhost:4000/api/v1/items')
        .then(resp=>resp.json())
        .then(items=>this.setState({myItems: items.filter(item=>item.user_id === localStorage.user_id)}))
    }
    
    render() {
        console.log(this.state)
        return (
            <div className="pack-list-container">
                {   this.state.myItems !== null
                    ?
                    <ItemContainer myItems={this.state.myItems} trip={this.props.trip}/>
                    :
                    ""
                }
            </div>
        );
    }
}

export default PackListContainer;