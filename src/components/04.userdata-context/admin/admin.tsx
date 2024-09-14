import { useContext, useState } from "react";
import Hr from "../hr/hr";
import User from "../user/user";
import './admin.css';
import { CompanyPortalContext, CompanyProvider } from "../context/companyPortalContext";

const Admin = () => {
    const { userData } = useContext<any>(CompanyPortalContext);

    return (
            <div className="bg-color">
                <h2>Admin... - {userData}</h2>
                <Hr />
                <User/>
            </div>
    )
}

export default Admin;