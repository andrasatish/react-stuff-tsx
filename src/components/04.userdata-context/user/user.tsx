import { useContext } from "react";
import { CompanyPortalContext } from "../context/companyPortalContext";

const User = () => {
    const { userData } = useContext<any>(CompanyPortalContext);

    return (
        <>
            <h2>User... -- {userData}</h2>
        </>
    )
}

export default User;