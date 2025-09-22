import React from "react";
class UserClass extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            userInfo:{
                name :"dummyName",
                location:"default",
                avatar_url:"http://dummy.photo.com",
            },
        };
        };
    
    async componentDidMount(){     
        
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });

        console.log(json);
        
        }
    render (){
        const {name, location,avatar_url} = this.state.userInfo;
        
        return  (<div className="user-card">
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        {/* <h2>Contact : {contact}</h2> */}

    </div>
    );
}
}

export default UserClass;