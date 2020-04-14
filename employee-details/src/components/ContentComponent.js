import React from "react";

export default function ContentComponent(props) {
    return (
        <div>
            <h1>This is Content Area...{props.arrayData[2]}</h1><hr/>
        </div>
    )
}