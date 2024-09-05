import { useState } from "react";
import ChildComponent, { ChangeDetails } from "./child";

export interface UserDetail {
    name:string;
    age: number; 
    location:string; 
    designation:string
}

export interface TouristDetail {
    name: string;
    age: number | string;
    location: string;
    address: TouristAddress,
    interestedStates : InterestedStates[] //array of objects
}

interface TouristAddress {
    street: string;
    state: string;
    country: string;
    countryID: number | string;
}

export interface InterestedStates {
    state: string;
}

const touristInitialData = [
    { name: 'Sudheer', age: 28, location: 'Hyderabad', 
        address: {
            street: 'KPHB',
            state: 'TS',
            country: 'India',
            countryID: '9999'
        },
        interestedStates:  [ {state:'TG'},{state:'MH'},{state:'DL'} ]
    }
];


const ParentProps = () => {
    const [name, setName] = useState<string>('Satish');
    const [empoyeeId, setEmployeeId] = useState<number>(10001);
    const [isAdult, setIsAdult] = useState<boolean>(true);
    const [userData, setUserData] = useState<UserDetail | null>({name:'Sudheer',designation:'Software',age:28,location:'Hyderabad'});
    const [touristData, setTouristData] = useState<TouristDetail[]>(touristInitialData);

    const handleChangeFromChild = (details:ChangeDetails, data:string) => {
        console.log('Child Clicked', details, data);
        setName(details.nameData);
        setIsAdult(details.adultFlag);
        setUserData(details.userData);
        const arrayCombined = [...touristData, details.touristList] //details.touristList
        setTouristData(arrayCombined);
    }

    return (
        <>
            <h1>Parent Props</h1>
            <ChildComponent 
                nameText={name} 
                empId={empoyeeId} 
                adultStatus={isAdult} 
                userList={userData} 
                touristData={touristData}
                dataChanges={handleChangeFromChild}/>
        </>
    )
}

export default ParentProps;