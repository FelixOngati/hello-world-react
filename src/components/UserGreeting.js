import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoggegIn: true
        }
    }
    render() {
        if (this.state.isLoggegIn){
            return(
                <div>Welcome Fegati</div>
            );
        }else{
            return (
                <div>Welcome Guest</div>
            );
        }
        // return (
        //     <div>
        //         Welcome Fegati
        //     </div>
        // );
    }
}

export default UserGreeting;