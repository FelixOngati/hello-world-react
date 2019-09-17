import React from 'react'
import Person from "./Person";

function NameList(){
    // const names = ['Jiji', 'Kvid', 'Joe2']
    // const nameList = names.map( name => <h2>{name}</h2>)
    // return <div>{nameList}</div>
    const persons = [
        {
            id: 1,
            name: 'Diana',
            age: 28,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'June',
            age: 25,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <Person person={person}/> )
    return <div>{personList}</div>
}

export default NameList