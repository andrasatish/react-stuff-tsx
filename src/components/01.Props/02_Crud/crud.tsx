import React, { useEffect, useState } from 'react';
import TouristForm from './tourist-form/tourist-form';
import { GenderList, PlaceType, StatesList } from '../../model/tourist';
import './crud.css';
import TableContainer from './table-container/table-container';
import TouristModal from './tourist-modal/tourist-modal';
import TouristAlert from './tourist-alert/tourist-alert';

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
    const [modalTitle, setModalTitle] = useState<any>(); 
    const [action, setAction] = useState<any>();
    const [updateTouristDetails, setUpdateTouristDetails] = useState<any>();
    const [deleteTouristDetails, setDeleteTouristDetails] = useState<any>();
    const [alertTitle, setAlertTitle] = useState<string>('');
    const [alertOpen, setAlertOpen] = useState<boolean>(false);

    const handleNewTouristData = (touristObj:any) => {
        setNewTouristDetails(touristObj);
        setIsModalOpen(true);
        setModalTitle(`Are you sure want to submit the details of ${touristObj?.name}?`);
        setAction('SUBMIT');
    }

    const handleEditedTourist = (editTouristData:any) => {
        setEditedObj(editTouristData);
    }

    const handleDeleteTourist = (tourist:any) => {
        setIsModalOpen(true);
        setModalTitle(`Are you sure want to delete the details of ${tourist?.name}?`);
        setAction('DELETE');
        setDeleteTouristDetails(tourist);
    }

    const handleUpdateTourist = (tourist:any) => {
        setIsModalOpen(true);
        setModalTitle(`Are you sure want to update tourist: ${tourist.name}`);
        setAction('UPDATE');
        setUpdateTouristDetails(tourist);
    }

    const modalHandler = (event:any) => {
        //event -> OK, CANCEL
        //event -> {"actionButtonValue": "OK", "action": "SUBMIT"}
        if(event.actionButtonValue === 'OK' && event.action === 'SUBMIT'){
            setTouristList([newTouristDetails, ...touristList]);
            setAlertTitle('Details saved successfully!');
            setAlertOpen(true);
        }
        if(event.actionButtonValue === 'OK' && event.action === 'UPDATE'){
            const updatedTourist = touristList.map((touristData:any)=> {
                return touristData.id === updateTouristDetails.id ? updateTouristDetails : touristData; 
            })
            setTouristList(updatedTourist);
            setAlertTitle('Details updated successfully!');
            setAlertOpen(true);
            setEditedObj({});
        }
        if(event.actionButtonValue === 'OK' && event.action === 'DELETE'){
            const filterTourist  = touristList.filter((touristData:any)=> touristData.id !== deleteTouristDetails.id)
            setTouristList(filterTourist);
            setAlertTitle('Details deleted successfully!');
            setAlertOpen(true);
        }
        setModalStatus(event.actionButtonValue); //OK,CANCEL
        setTimeout(()=>{
            setModalStatus(null);
            setAlertOpen(false);
        });
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

                <TouristModal 
                    modalTitle={modalTitle}  
                    action={action}
                    modalHandler={modalHandler} 
                    isModalOpen={isModalOpen}/>

                <TouristAlert alertTitle={alertTitle} alertOpen={alertOpen} />

            </div>
        </>
    )
}

export default CrudWrapper;