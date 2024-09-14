import { useContext } from "react";
import { CompanyPortalContext } from "../context/companyPortalContext";

const Employee = () => {
    const { userData, setUserData } = useContext<any>(CompanyPortalContext);

    const changeUser = () => {
        setUserData('SATISH');
    }

    return (
        <div style={{backgroundColor:'green',padding:'20px'}}>
            <h2>Employee...{userData}</h2>
            <button onClick={changeUser}>Change User</button>
        </div>
    )
}

export default Employee;