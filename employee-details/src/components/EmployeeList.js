import React from "react";
import employeeData from "../data/employeeList";

export default function EmployeeList() {
    return (
        <div>
            <h1>Following is the list of Employees:</h1><hr/>

            { employeeData.map(function(emp) {
                return (
                    <div>
                        <img src={emp.avatar} />
                        <h1>Employee Data: {emp.name}</h1>
                        <h2>User Id is: {emp.id}</h2>
                        <h3>User Create On: {new Date(emp.createdAt).toDateString()}</h3><hr/>
                    </div>
                )
            })}
        </div>
    )
}