import React from "react";

export default function FooterComponent(props) {
    return (
        <div>
            <h2>This is Footer Component</h2>
            <input type="button" value="Click to Update" onClick={props.alertData} />
        </div>
    )
}