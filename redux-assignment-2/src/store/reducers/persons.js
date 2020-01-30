const initialState = {
    persons: []
}

const persons = (state= initialState, action)=>{
    if(action.type === 'ADD_PERSON'){
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        
        return { persons: state.persons.concat(newPerson)};
    }

    if(action.type === 'DELETE_PERSON'){
        return { persons: state.persons.filter(person => person.id !== action.personId)}
    }
    return state;
}

export default persons;