import React, {useState} from "react";


export default function UsingObjectInState() {
    var [userDetails, setUserDetails] = useState({
        name: "Rahul",
        age: 10,
        designation: "Manager",
        someArrayData: [1, 2, 3, 4, 5]
    })

    function addSalary() {
        setUserDetails({
            ...userDetails,
            salary: 1000,
            name: "Anshul",
            someArrayData: [...userDetails.someArrayData, 6]
        })
    }

    return (
        <div>
            <h1>Hello {userDetails.name} {userDetails.someArrayData.length}</h1>
            <h2>Initial Salary Of Employee: {userDetails.salary}</h2>
            <input type="button" onClick={addSalary} value="Click to Add Salary Property" />
        </div>
    )
}