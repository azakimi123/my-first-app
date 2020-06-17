//Import the React Package, as well as Component
import React, {Component} from 'react';

//Create a Javascript class
class ClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            imageInput: '',
            nameInput: '',
            friends: []
        }
    }

    handleInput = (event) => {
        this.setState({
            nameInput: event.target.value
        })
    }


    handleImageInput = (event) => {
        this.setState({
            imageInput: event.target.value
        })
    }

    addFriend = () => {
        let newFriends = this.state.friends.slice();
        newFriends.push({picture: this.state.imageInput, name: this.state.nameInput});

        this.setState({friends: newFriends});
    }


    //render method: REQUIRED to return display
    render() {
        console.log(this.state.friends);
        const mappedFriends = this.state.friends.map((element, i) => (
            <div key={i}>
                <img width= '100px' src={element.picture} alt= {element.name}/>
                <span>{element.name}</span>
            </div>
        ))
        return (
            <div>
                {/* <p>{this.state.nameInput}</p> */}
                <span>Picture: </span>
                <input onChange={(event) => this.handleImageInput(event)} value={this.state.imageInput}/>

                <span>Name: </span>
                <input onChange={(event) => this.handleInput(event)} value={this.state.nameInput}/>

                <button onClick={this.addFriend}>Add Friend</button>
                {mappedFriends}
            </div>
        )
    }
}

//export component to make it available to other components/files
export default ClassComponent;