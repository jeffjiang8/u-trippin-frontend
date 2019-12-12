import React, { Component } from 'react';

class Test extends Component {

    state = {
        avatars: [],
        loading: true
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/categories')
        .then(resp=>resp.json())
        .then(data=>this.setState({avatars: data, loading: false}))
    }
    render() {
        console.log(this.state.avatars)
        if (this.state.loading === true){
            return <h1>loading</h1>
        }

        return (
            <div>
                <ul>
                    {this.state.avatars.map((avatar,id)=>{
                        return (<li key={id}>
                                <img src={avatar.avatar} />
                                </li>)
                    })}
                    {/* <li><img src='./images/food.png' /></li> */}
                    
                </ul>
            </div>
        );
    }
}

export default Test;