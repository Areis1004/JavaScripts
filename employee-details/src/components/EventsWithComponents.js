import React from "react";

export default function EventsWithComponents() {

    

    function getData(data, event) {
        alert(data)
    }

    return (
        <div>
            <h1>Hello World Application...</h1>
            <input type="text"/>
            <input type="button" value="Click to Get Name" onClick={function alertData(event) {
                alert("Hello World...");
                getData("10", event)
            }}/>
        </div>
    )
}