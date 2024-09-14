import { useState } from 'react';
import './App.css';
import ParentProps from './components/01.Props/01_Basic/parent';
import CrudWrapper from './components/01.Props/02_Crud/crud';
import PropsNested from './components/03.props-drilling/props-nested';
import Admin from './components/04.userdata-context/admin/admin';
import { CompanyProvider } from './components/04.userdata-context/context/companyPortalContext';

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
    <CompanyProvider>
      <Admin />
    </CompanyProvider>
  );
}

export default App;
