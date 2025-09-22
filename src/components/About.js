import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        
    }
    render(){
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all ">
            {/* <h1>About Class Component</h1>
            <h2>user information using github API</h2> */}
            {/* <User name= "aiman" location="bangalore" contact="aiman@gmail.com"/> */}
            <UserClass name="Aiman" location="bangalore" contact="akshay@gmail.com" />
        </div>


    );
}

}

export default About;