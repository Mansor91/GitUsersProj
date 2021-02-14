import React from 'react';
import './App.css';
//import UserList from './UserList';
import UserInfo from './UserInfo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      usersArr : ['myfishnameisqwerty', 'gagishmagi', 'Galperry']
    }
    this.inputRef= React.createRef();
  }

  addUser = (e) => {
    e.preventDefault();
    let userInput = this.inputRef.current.value;
    let tmpArr = [...this.state.usersArr];
    tmpArr.push(userInput);
    this.setState({ usersArr:tmpArr });
    this.clearInput(e);
  }

  clearInput = (e) => {
    e.preventDefault(); 
    this.inputRef.current.value='';
  }

  removeUser = (e) => {
    e.preventDefault(); 
    let givenUser = this.inputRef.current.value;
    let tmpArr = [...this.state.usersArr];
    tmpArr = tmpArr.filter((user) => {
      return (user!==givenUser)
    });
    this.setState({ usersArr : tmpArr });
    this.clearInput(e);
  }

  render(){
    return (
      <div className="App">
        {/* <UserList/> */}
        <form onSubmit={this.addUser}>
          <input type="text" name="" ref={this.inputRef}/>
          <br/>
          <button> Click to add</button>
          <button onClick={this.clearInput}>Clear</button>
          <button onClick={this.removeUser}>Clear User</button>
        </form>
        
        {this.state.usersArr.map((user, index) =>  {
          return <UserInfo key={index} promise = {
            fetch('https://api.github.com/users/' + user)
          }/>
        })}

      </div>
    );
  }

}

export default App;
