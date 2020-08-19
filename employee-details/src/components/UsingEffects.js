import React, { useState, useEffect } from "react";

export default function UsingEffects() {

    var [name, setName] = useState("Mayank");
    var [age, setAge] = useState(10);
    var [designation, setDesignation] = useState("Developer");

    useEffect(function() {
        alert("Component Rendered Effect Name")
    }, [name])

    useEffect(function() {
        alert("Component Rendered  Effect Age")
    }, [age])

    useEffect(function() {
        alert("Component Rendered  Effect None")
    }, [])

    useEffect(function() {
        alert("Component Rendered  Effect Both")
    }, [name, age, designation])

    function updateAgeValue(){
        setAge(30)
    }

    function updateNameValue(){
        setName("Anshul");
    }

    function updateDesignationValue(){
        setDesignation("Trainer");
    }

    return (
        <div>
            <h1>Hello Effect Hooks for {name} age: {age}</h1>
            <input type="button" onClick={updateNameValue} value="Click To Update Name" />
            <input type="button" onClick={updateAgeValue} value="Click To Update Age" />
            <input type="button" onClick={updateDesignationValue} value="Click To Update Designation" />
        </div>
    )
}