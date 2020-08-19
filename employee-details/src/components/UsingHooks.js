import React, {useState} from "react"

export default function UsingHooks(props) {

    var timerData = useState(new Date().getMinutes() + ":" + new Date().getSeconds());

    setTimeout(function() {
        timerData[1](new Date().getMinutes() + ":" + new Date().getSeconds())
        console.log(timerData)
    }, 1000)

    return ( 
        <div>
            <h1>Current Time for {props.name}: {timerData[0]}</h1>
            <input type="button" value="Update Value" />
        </div>
    )
}