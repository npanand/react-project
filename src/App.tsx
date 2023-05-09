import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hooks from './component/hooks';
import Formcheckup from "./component/formCheckUp";
import CustomFormValidation from './customformvalidation';

const App = ()=>{
  return(
<>
<BrowserRouter>
        <Routes>
            <Route path='/customformvalidation' element={<CustomFormValidation/>}/>
            <Route path='/' element={<Navbar/>}/>
            <Route path="/hooks" element={<Hooks/>} />
            <Route path="/formcheckup" element={<Formcheckup/>} />
        </Routes>
</BrowserRouter> 
</>
  );
}

export default App;
