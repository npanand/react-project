import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hooks from './component/hooks';
import Formcheckup from "./component/formCheckUp";
import CustomFormValidation from './customformvalidation';
import ApiIntegrateion from './component/api/ApiIntegrateion';
import Apidatadiaplay from './component/apidataDisplay';
import Companyuserdata from './component/companyuserdata';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=>{
  return(
    <>
     <Navbar/>
      
      <BrowserRouter>
        <Routes>
          <Route path='/customformvalidation' element={<CustomFormValidation />} />
          <Route path='/' element={<Navbar />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/formcheckup" element={<Formcheckup />} />
          <Route path ="/companyuserdata" element={<Companyuserdata/>}/>
          <Route path='/api' element={<Apidatadiaplay/>}/>
        </Routes>
      </BrowserRouter>
    
    
    </>
  );
}

export default App;
