import React from 'react';

class ListOption extends React.Component{

    render(){
        return (
        <li>{this.props.value}</li>
        );
    }
}

export default ListOption;