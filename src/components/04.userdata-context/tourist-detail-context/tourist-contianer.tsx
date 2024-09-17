import React, { useContext } from 'react';
import TouristForm from "./tourist-form/tourist-form";
import TouristTable from './tourist-table/tourist-table';
import './tourist-container.css';
import { TouristProvider } from './touristContext';
import TouristModal from './tourist-modal/touristModal';
import TouristAlert from './tourist-alert/tourist-alert';

const TouristContainer = () => {

    return (
        <div className='curd-container'>
            <TouristProvider>
                <TouristForm />
                <TouristTable />
                <TouristModal />
                <TouristAlert />
            </TouristProvider>
        </div>)
}

export default TouristContainer;