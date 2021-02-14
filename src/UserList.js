import React from 'react';
import ListOption from './ListOption';
//import './UserList.css';

class UserList extends React.Component{

    constructor(){
        super();
        this.usersList = ['Sara','Dave','John','Sally'];
        this.addUser = this.addUser.bind(this);
    }

    componentWillMount(){
        this.setState({user:""});
    }

    addUser(){
        var user = this.refs.user.value
        //this.state.user =  user
        this.setState({user : user})
        this.usersList.push(user)
        console.log(this.state)
        this.refs.user.value = '';
    }

    render(){
        return (
            <div>
                <ul>
                    {
                        this.usersList.map(function(name){
                            return <ListOption onClick="" key={name} value={name}/>
                        })
                    }
                </ul>
                <input ref="user" type="text"></input>
                <button onClick={this.addUser}>Add User</button>
            </div>
        );
    }
}

export default UserList;