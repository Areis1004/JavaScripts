import React from "react";

export default function HeaderComponent(props) {

    var name = props.userDetails.name;
    var salary = 10;
    if(props.userDetails.salary < 20) {
        return (
            <div>
                <h1>This is the Header Page</h1>

                { props.userDetails.salary < 20 && <h1>Your Salary is High....</h1> }

                <h2>The User of this Application is: {name}</h2>
                <h3>The User of this Application is having Age of: {props.age}</h3>
                <h4>The user salary is: {salary}</h4><hr/>
            </div>
        )
    } else {
        return null;
    }
}