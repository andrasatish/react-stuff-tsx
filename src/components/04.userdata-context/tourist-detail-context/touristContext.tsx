import React, { createContext, FC, ReactNode, useEffect, useState } from 'react';


export const TouristContext = createContext<any>(null);

export const TouristProvider:FC<{children:ReactNode}> = ({children}) => {
    const [ touristList, setTouristList ] = useState<any>([]);
    const [ editedObj, setEditedObj ] = useState<any>();
    const [ modalConfig, setModalConfig ] = useState<any>();

    // useEffect(()=>{
    //     console.log('deletedObj Tourist List Data', deletedObj);
    // },[deletedObj]);

    return (
        <TouristContext.Provider value={ {touristList, setTouristList, editedObj, setEditedObj, modalConfig, setModalConfig} }>{children}</TouristContext.Provider>
    )
}

