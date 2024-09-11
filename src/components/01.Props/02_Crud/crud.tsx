import React, { useEffect, useState } from 'react';
import TouristForm from './tourist-form/tourist-form';
import { GenderList, PlaceType, StatesList } from '../../model/tourist';
import './crud.css';
import TableContainer from './table-container/table-container';
import TouristModal from './tourist-modal/tourist-modal';

const CrudWrapper = () => {
    const statesList: StatesList[] = [{ label: 'Telangana', value: 'TL' }, { label: 'Andhra Pradesh', value: 'AP' }, { label: 'Delhi', value: 'Delhi' }];
    const genderOptions: GenderList[] = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }];
    const placeTypeList: PlaceType[] = [{ label: 'Public Visit', value: 'public' }, { label: 'Priavate Visit', value: 'private' }];
    const [genderData, setGender] = useState<string>('male');
    const [editedObj, setEditedObj] = useState({});
    const [touristList, setTouristList] = useState<any>([]);
    const [newTouristDetails, setNewTouristDetails] = useState<any>();
    const [modalStatus, setModalStatus] = useState<any>();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleNewTouristData = (touristObj:any) => {
        setNewTouristDetails(touristObj);
        setIsModalOpen(true);
    }

    const handleEditedTourist = (editTouristData:any) => {
        setEditedObj(editTouristData);
    }

    const handleDeleteTourist = (tourist:any) => {
        const filterTourist  = touristList.filter((touristData:any)=> touristData.id !== tourist.id)
        setTouristList(filterTourist);
    }

    const handleUpdateTourist = (tourist:any) => {
        const updatedTourist = touristList.map((touristData:any)=> {
            return touristData.id === tourist.id ? tourist : touristData; 
        })
        setTouristList(updatedTourist);
        setEditedObj({});
    }

    const modalHandler = (event:any) => {
        //event -> OK, CANCEL
        if(event === 'OK'){
            setTouristList([newTouristDetails, ...touristList]);
            setModalStatus(event);
        }
        setTimeout(()=>{
            setModalStatus(null);
        },1000);
        setIsModalOpen(false);
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
                    updateTourist={handleUpdateTourist}
                    modalStatus={modalStatus}
                />
                <TableContainer 
                    touristList={touristList}
                    editedTourst={handleEditedTourist}
                    deleteTourist={handleDeleteTourist}/>

                <TouristModal newTouristDetails={newTouristDetails} modalHandler={modalHandler} isModalOpen={isModalOpen}/>
            </div>
        </>
    )
}

export default CrudWrapper;