import React, {Component} from 'react'

class Hello extends Component {
    render() {
        // return (
        //     <div>
        //         <h1>Hello Fegati</h1>
        //     </div>
        // )

        return React.createElement(
            'div',
            {id: 'hello', className:'dummyClass'},
            React.createElement('h1',null,'Hello Fegati'))
    }
}

export default Hello
