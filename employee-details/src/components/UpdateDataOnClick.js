import React from "react"

export default function UpdateDataOnClick() {
    var timerData = new Date().getMinutes() + ":" + new Date().getSeconds();

    function updateData() {
        timerData = new Date().getMinutes() + ":" + new Date().getSeconds();
        console.log(timerData)
    }

    return (
        <div>
            <h1>Current Time for {timerData}</h1>
            <input type="button" value="Click To Update" onClick={updateData} />
        </div>
    )
}