import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoggegIn: false
        }
    }
    render() {
        let message
        if(this.state.isLoggegIn){
            message = 'Welcome Felix'
        }else{
            message = 'Welcome Guest'
        }

        return <div>{message}</div>

        // if (this.state.isLoggegIn){
        //     return(
        //         <div>Welcome Fegati</div>
        //     );
        // }else{
        //     return (
        //         <div>Welcome Guest</div>
        //     );
        // }
        // return (
        //     <div>
        //         Welcome Fegati
        //     </div>
        // );
    }
}

export default UserGreeting;