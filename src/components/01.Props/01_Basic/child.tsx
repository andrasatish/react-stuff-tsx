const ChildComponent = (props:any) => {
    const { nameText } = props;
    return (
        <>
            <h2>Child Component</h2>
            { nameText && <p>Name : { nameText }</p>}
        </>
    )
}

export default ChildComponent;