import React from "react";
import ComponentA from "./component-A";

const PropsNested = (props:any) => {
    return (
        <>
            <h4>Props Nested Data</h4>
                <ComponentA username={props.username} handleUserData={props.handleData}/>
            <p>Props Ending...</p>
        </>
    )
}

export default PropsNested;