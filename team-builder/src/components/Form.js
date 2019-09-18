import React from 'react'


function Form() {
    return (
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" />

            <label for="email">Email</label>
            <input type="text" name="email" />

            <label for="role">Role</label>
            <input type="text" name="role" />
        </form>
    )
}

export default Form; 