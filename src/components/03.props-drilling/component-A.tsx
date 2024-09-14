import React from "react";
import ComponentB from "./component-B";

const ComponentA = (props:any) => {
    return (
        <>
            <h4>Component-A Data</h4>
                <ComponentB username={props.username} handleUser={props.handleUserData}/>
            <p>Component-A Ending..</p>
        </>
    )
}

export default ComponentA;