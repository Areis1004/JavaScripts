import React, { useState, useEffect } from "react"

export default function UsingHooksData() {

    var [timerData, setTimerData] = useState(new Date().getMinutes() + ":" + new Date().getSeconds());
    var [userAge, setUserAge] = useState(10);

    function updateData() {
        setTimerData(new Date().getMinutes() + ":" + new Date().getSeconds())
    }

    function updateAge() {
        setUserAge(userAge + 1)
        setTimerData(new Date().getMinutes() + ":" + new Date().getSeconds())
    }

    return (
        <div>
            <h1>Current Time: {timerData}</h1>
            <h2>User Age: {userAge}</h2>
            <input type="button" onClick={updateData} value="Click To Update Timer" />
            <input type="button" onClick={updateAge} value="Click To Update Age" />
        </div>
    )
}