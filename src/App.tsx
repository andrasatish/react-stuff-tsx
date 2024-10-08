import { useState } from 'react';
import './App.css';
import ParentProps from './components/01.Props/01_Basic/parent';
import CrudWrapper from './components/01.Props/02_Crud/crud';
import PropsNested from './components/03.props-drilling/props-nested';
import Admin from './components/04.userdata-context/admin/admin';
import { CompanyProvider } from './components/04.userdata-context/context/companyPortalContext';
import TouristContainer from './components/04.userdata-context/tourist-detail-context/tourist-contianer';
import BasicAPIIntegration from './components/05.API-Integration/01.Basic';
import TouristAPIIntegration from './components/05.API-Integration/02.Tourist/tourist-detail-context/tourist-contianer';
import AppRouting from './components/07.nested-routing/01.app-routing';
// import AppRouting from './components/06.routing/01.app-routing';

function App() {
  const [username, setUsername] = useState('SUDHEER');

  const handleData = (name:any,age:any) => {
    setUsername(name)
  }

  return (
    // <ParentProps />
    // <CrudWrapper />

    // Props Drilling
    // <>
    //   <h2>App Component Data...{username}</h2>
    //     <PropsNested username={username} handleData={handleData}/>
    //   <h2>App Componet End...</h2>
         
    // </>

    // Context - 1
    // <CompanyProvider>
    //   <Admin />
    // </CompanyProvider>

    // Context - 2
    // <TouristContainer />

    //API Integration
    // <BasicAPIIntegration />
    // <TouristAPIIntegration />

    // APP ROUTING
    <AppRouting/>
  );
}

export default App;
