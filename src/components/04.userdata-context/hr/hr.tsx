import { useContext } from "react";
import Employee from "../employee/employee";
import { CompanyPortalContext } from "../context/companyPortalContext";

const Hr = () => {
    const { userData } = useContext<any>(CompanyPortalContext);
    
    return (
        <>
            <h2>Hr... {userData}</h2>
            <Employee />
        </>
    )
}

export default Hr;