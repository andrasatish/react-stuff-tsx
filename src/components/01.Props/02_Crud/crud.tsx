import React, { useEffect, useState } from 'react';
import TouristForm from './tourist-form/tourist-form';
import { GenderList, PlaceType, StatesList } from '../../model/tourist';
import './crud.css';
import TableContainer from './table-container/table-container';

const CrudWrapper = () => {
    const statesList: StatesList[] = [{ label: 'Telangana', value: 'TL' }, { label: 'Andhra Pradesh', value: 'AP' }, { label: 'Delhi', value: 'Delhi' }];
    const genderOptions: GenderList[] = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }];
    const placeTypeList: PlaceType[] = [{ label: 'Public Visit', value: 'public' }, { label: 'Priavate Visit', value: 'private' }];
    const [genderData, setGender] = useState<string>('male');
    const [editedObj, setEditedObj] = useState({});
    const [touristList, setTouristList] = useState<any>([]);

    useEffect(()=>{
        console.log('touristList parent :: ', touristList, editedObj);
        //call API -> reponse -> updated to state
    },[touristList, editedObj]);

    const handleNewTouristData = (touristObj:any) => {
        setTouristList([touristObj, ...touristList]);
    }

    const handleEditedTourist = (editTouristData:any) => {
        console.log('EDITED FIELD DATA', editTouristData);
        setEditedObj(editTouristData);
    }

    return (
        <>
            {/* Form
                Table
                Modal
                Alert */}

            <div className='curd-container'>
                <TouristForm
                    statesList={statesList}
                    genderOptions={genderOptions}
                    genderData={genderData}
                    placeTypeList={placeTypeList}
                    editedObj={editedObj}
                    sendTouristData={handleNewTouristData}
                />
                <TableContainer 
                    touristList={touristList}
                    editedTourst={handleEditedTourist}/>
            </div>
        </>
    )
}

export default CrudWrapper;