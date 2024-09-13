import { useState } from 'react';
import TouristForm from './tourist-form/tourist-form';
import { AlertConfigData, GenderList, ModalActionButtons, PlaceType, StatesList, TouristListData } from '../../model/tourist.modal';
import './crud.css';
import TableContainer from './table-container/table-container';
import TouristModal from './tourist-modal/tourist-modal';
import TouristAlert from './tourist-alert/tourist-alert';

const CrudWrapper = () => {
    const statesList: StatesList[] = [{ label: 'Telangana', value: 'TL' }, { label: 'Andhra Pradesh', value: 'AP' }, { label: 'Delhi', value: 'Delhi' }];
    const genderOptions: GenderList[] = [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }];
    const placeTypeList: PlaceType[] = [{ label: 'Public Visit', value: 'public' }, { label: 'Priavate Visit', value: 'private' }];
    const [genderData, setGender] = useState<string>('male');
    const [touristList, setTouristList] = useState<TouristListData[]>([]);
    const [modalStatus, setModalStatus] = useState<any>('');
    const [alertData, setAlertData] = useState<AlertConfigData>({title: '', alertOpen:false});
    const [modalConfig, setModalConfig] = useState<any>({modalTitle: null,action: null,isModalOpen: false});
    const [selectedTourist, setSelectedTourist] = useState<any>();
    const [buttonAction, setButtonAction] = useState<any>();

    // Form Submittion
    const handleNewTouristData = (touristObj:TouristListData) => {
        setSelectedTourist(touristObj);
        setButtonAction('SUBMIT');
        modalConfiguration(`Are you sure want to submit the details of ${touristObj?.name}?`,'SUBMIT', true);
    }

    // Table Edit button clicked
    const handleEditedTourist = (editTouristData:TouristListData) => {
        setSelectedTourist(editTouristData);
        setButtonAction('EDIT');
    }

    // Delete Tourist
    const handleDeleteTourist = (tourist:TouristListData) => {
        modalConfiguration(`Are you sure want to delete the details of ${tourist?.name}?`, 'DELETE',true);
        setSelectedTourist(tourist);
    }

    // Update Tourist
    const handleUpdateTourist = (tourist:TouristListData) => {
        modalConfiguration(`Are you sure want to update tourist: ${tourist.name}`,'UPDATE',true);
        setSelectedTourist(tourist);
        setButtonAction('UPDATE');
    }

    const modalHandler = (event:ModalActionButtons) => {
        //event -> OK, CANCEL
        //event -> {"actionButtonValue": "OK", "action": "SUBMIT"}
        if(event.actionButtonValue === 'OK' && event.action === 'SUBMIT'){
            // setTouristList([newTouristDetails, ...touristList]);
            setTouristList([selectedTourist, ...touristList]);
            alertSetting('Details saved successfully!', true);
        }
        if(event.actionButtonValue === 'OK' && event.action === 'UPDATE'){
            const updatedTourist = touristList.map((touristData:TouristListData)=> {
                return touristData.id === selectedTourist.id ? selectedTourist : touristData; 
            })
            setTouristList(updatedTourist);
            alertSetting('Details updated successfully!', true);
            setButtonAction('SUBMIT');
        }
        if(event.actionButtonValue === 'OK' && event.action === 'DELETE'){
            const filterTourist  = touristList.filter((touristData:any)=> touristData.id !== selectedTourist.id)
            setTouristList(filterTourist);
            alertSetting('Details deleted successfully!', true);
        }
        setModalStatus(event.actionButtonValue); //OK,CANCEL
        setTimeout(()=>{
            setModalStatus(null);
            alertSetting('', false);
            setSelectedTourist(null);
        });
        modalConfiguration('','',false);
    }

    // Setting Alert Configuration
    const alertSetting = (title:any, status:any) => {
        setAlertData({
            title: title,
            alertOpen: status
        })
    }

    // Setting Modal Configuration
    const modalConfiguration = (title:any, action:any, modalStatus:any) => {
        const modalCon = {
            modalTitle: title,
            action: action,
            isModalOpen: modalStatus
        }
        setModalConfig(modalCon)
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
                    editedObj={selectedTourist}
                    sendTouristData={handleNewTouristData}
                    updateTourist={handleUpdateTourist}
                    modalStatus={modalStatus}
                    buttonAction={buttonAction}
                />
                <TableContainer 
                    touristList={touristList}
                    editedTourst={handleEditedTourist}
                    deleteTourist={handleDeleteTourist}/>

                <TouristModal   
                    modalHandler={modalHandler} 
                    modalConfig={modalConfig}/>

                <TouristAlert alertData={alertData} />

            </div>
        </>
    )
}

export default CrudWrapper;