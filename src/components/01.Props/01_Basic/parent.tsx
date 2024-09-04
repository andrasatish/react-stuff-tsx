import { useState } from "react";
import ChildComponent from "./child";

const ParentProps = () => {
    const [name, setName] = useState<string>('Satish');
    return (
        <>
            <h1>Parent Props</h1>
            <ChildComponent nameText={name}/>
        </>
    )
}

export default ParentProps;