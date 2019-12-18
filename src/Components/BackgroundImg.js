import React, { Component } from 'react';

class BackgroundImg extends Component {

    state={
        url: '',
        loading: true
    }

    componentDidMount(){
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_IMG_API_KEY}&q=${this.props.query}&category=travel&image_type=photo&pretty=true`)
        .then(resp=>resp.json())
        .then(data=> {if(data.hits[0] !== undefined){
                return this.setState({url: data.hits[0].largeImageURL, loading: false})
                } else {
                    return this.setState({url: undefined, loading: false})
                }})
    }

    render() {
        // console.log(this.state.url)
        if (this.state.loading){
            return <h1>loading</h1>
        }
        return (
            
            <>  
            {
                this.state.url === undefined
                ?
                <img src='http://localhost:3000/images/alt.jpeg' alt='meh'  className="background-img"/>
                :
                <img src={`${this.state.url}`} alt='../public/images/alt.jpeg'  className="background-img"/>
            }
            </>
        );
    }
}

export default BackgroundImg;