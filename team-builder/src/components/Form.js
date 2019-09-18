import React, { useState } from 'react'


const Form = props => {
    const [data, setData] = useState({ name: '', email: '', role: '' })
    const handleChanges = e =>  setData({ ...data, [e.target.name]: e.target.value });


    const handleSubmit = event => {
        event.preventDefault();
        props.setTeam([{...props.team}, data]);
    
    }


    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={data.name} onChange={handleChanges}/>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={data.email} onChange={handleChanges}/>

            <label htmlFor="role">Role</label>
            <input type="text" name="role" value={data.role} onChange={handleChanges} />
            
            
            
            <button type="submit">Submit</button>
        </form>
    )
    }

export default Form; 