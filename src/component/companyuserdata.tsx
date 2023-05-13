import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Dropzone from './upload/uploadcontrol';
import axios from 'axios';
const Companyuserdata=()=>{

    const companyUserData = Yup.object().shape({
       
        customername:Yup.string()
        .required('Name is required')
        .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Invalid name')
        .min(4, 'Name is too short')
        .max(50, 'Name is too long'),
        location:Yup.string()
        .required('location is required'), 
        industry:Yup.string()
        .required('industry is required'), 
        application:Yup.string()
        .required('application is required'),
        applicationtype:Yup.string().required("application type is required"),
      });
  return (
    <div>
        <Formik
       initialValues={{
         customername: '',
         location: '',
         industry: '',
         Application:'',
         applicationtype:'',
         image:'',
       }}
       validationSchema={companyUserData}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
         var a =JSON.stringify(values,null,2)//json
                    var b = JSON.parse(a);//object
        axios.post('https://645cc637250a246ae30da723.mockapi.io/user',b);

       }}
     >
       {({ }) => (
         <Form>
            <label htmlFor="customename">customer name</label>
            <Field name="customername" id ="customername" />
            <ErrorMessage  name ="customername" component="div"/>


            <label htmlFor="location">location</label>
            <Field name="location" id ="location" />
            <ErrorMessage  name ="location"/>


            <label htmlFor="industry">industry</label>
            <Field name="industry" id ="industry" />
            <ErrorMessage  name ="industry"/>


            <label htmlFor="application">application</label>
            <Field name="application" id ="application" />
            <ErrorMessage  name ="application"/>


            <label htmlFor="applicationtype">ApplicationType</label>
            <Field name="applicationtype" id ="applicationtype" />
            <ErrorMessage  name ="applicationtype"/>  

             <div className="form-group row mt-4">
                            <label htmlFor="image" className="col-md-4 col-lg-2 col-form-label">Logo :</label>
                            <div className="col-md-8 col-lg-4">
                            <Dropzone id={"image"} name="image" format="base64" mimeTypes={[".png", ".jpeg", ".pdf", ".doc", ".docx"]} />
                            </div>
                        </div> 
          
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>

    </div>
  )
}

export default Companyuserdata