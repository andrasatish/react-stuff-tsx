import React, { createContext, FC, ReactNode, useState } from "react";

export const CompanyPortalContext = createContext<any>(null);

const CompanyProvider:FC<{children:ReactNode}> = ({children}) => {
    const [ userData, setUserData ] = useState<any>('SUDHEER');

    return (
        <CompanyPortalContext.Provider value={{ userData, setUserData }}>{children}</CompanyPortalContext.Provider>
    )
}

export { CompanyProvider };