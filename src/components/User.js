import { useState } from "react";
const User = (props) =>{
    const [count] = useState(0);
    const [count2] = useState(1);

    const {name , location , contact} =props
    // const {name ,location,contact} = props 
    return (<div className="user-card">

        <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1>

        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>{contact}</h2>
    </div> 
    )
}

export default User;