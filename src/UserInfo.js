import React from 'react';

class UserInfo extends React.Component{
    constructor() {
        super();
        this.state = {
            loading: true, 
            error:null, 
            data:null
        }
    }

    componentDidMount(){
        this.props.promise.then( response => response.json() ).then(
            value => this.setState({loading:false,data:value}),
            error => this.setState({loading:false,error:error})
        )
    }


    render(){
        if(this.state.loading){ return <span>loading...</span>}
        else if(this.state.error !== null){
        return <span>Error: {this.state.error.message}</span>
        }
        else{
            var userInfo = this.state.data;
            let errMsg='';
            try {
                userInfo.created_at.toLocaleString()
            } catch (error) {
                errMsg = error.message
            }
            return (
                (!errMsg) ?
                    <ul>
                        <img src={userInfo.avatar_url} alt="" width="100px"></img>
                        <li>Username: {userInfo.login}</li>
                        <li>Followers: {userInfo.followers}</li>
                        <li>Following: {userInfo.following}</li>
                        <li>Created at: {userInfo.created_at.toLocaleString()}</li>
                    </ul>
                    : <div style={{color:'red'}}>
                        Error User!
                    </div>
            )
        }
    }

}

export default UserInfo;
