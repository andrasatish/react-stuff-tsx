import React from "react";
import ComponentC from "./component-C";

const ComponentB = (props: any) => {

    const chanageUsername = () => {
        props.handleUser('SATISH','32');
    }

    return (
        <>
            <h4>Component-B Data</h4>
            <ComponentC username={props.username} />
            <h2>Component-B Ending..</h2>
            <button onClick={chanageUsername}>Change Username</button>
        </>
    )
}

export default ComponentB;