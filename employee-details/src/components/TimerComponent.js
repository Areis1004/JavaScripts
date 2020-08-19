import React from "react"

export default function TimerComponent(props) {
    var timerData = new Date().getMinutes() + ":" + new Date().getSeconds();

    setInterval(function() {
        timerData = new Date().getMinutes() + ":" + new Date().getSeconds();
        console.log(timerData)
    }, 1000)

    return <h1>Current Time for {props.name}: {timerData}</h1>
}