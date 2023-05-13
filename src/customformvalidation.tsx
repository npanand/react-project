import React, { useState } from 'react'
import { ErrorMessage, Field, FieldArray, Form, Formik, FormikHelpers, getIn, useFormikContext } from 'formik';
import * as Yup from 'yup';
import FormikControl from './component/formControls/FormikControl';


const CustomFormValidation =()=>{
  
  const[value,setValue]=useState("no");
  const[data,setdata]=useState(null);
  var userdata:any;

    const checkboxValidation=[  
{key:"honda",value:"honda"},{key:"suzuki",value:"suzuki"},{key:"bmw",value:"bmw"}
];
  const radioValidation=[{key:"male",value:"male"},
  {key:"female",value:"female"}];

  const selectValidation=[
 {key:"model",value:"model"},{key:"iphone 14",value:"iphone"},{key:"redmi note 10 pro",value:"redmi"},{key:"google pixel 5",value:"google"}

  ];

  const ValidartionInitial ={
    email:'',password:'',textarea:'',car:[],gender:'',mobile:''
  }
  

  
  const emailValidation=Yup.object().shape({

    email: Yup.string().email('invalid email').required('email important'),
    password: Yup.string().min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol').required("password is important"),
    textarea:Yup.string().min(5,"low passage").max(35,"overpassage").required("please enter the some comment") ,
    gender:Yup.string().required("please choose the field"),
    mobile:Yup.string().required("please choose the model"),
    
          

  });
  const handelesubmit=(value:any)=>{
          setdata(value);
  }

  
  return (
    <Formik
    enableReinitialize
    initialValues={ValidartionInitial}
    validationSchema={emailValidation}
    onSubmit={(values,actions) => {
        actions.resetForm();

        
        

        console.log(JSON.stringify(values,null,2));


    }}
>
     {({
                        values,
                        errors,
                        touched,
                        
                        handleBlur,
                        handleSubmit,
                        handleReset,
                        handleChange,
                    }) => (
                        <Form   onSubmit={handleSubmit} >
                             <>
                             <div>
                             <FormikControl control="input" class="" type="email" label="please fill the email" name="email" placeholder="enter the email" />
                             <br/>
                             <FormikControl control="input" type="password" label="enter a password" name="password" placeholder="enter the password" />
                             <br/>
                             <FormikControl control="input" type="textArea" name="textarea" placeholder="enter the some comments" /> 
                             <br/>
                             <FormikControl control="checkbox"  label="car company" name="car" options={checkboxValidation} />
                            
                             <br/>
                             
                             <FormikControl control="radio"  label="gender" name="gender" placeholder="choose the radiobutton" options={radioValidation} />
                             <br/>
                             <FormikControl control="select"  label="choose the phone" name="mobile" placeholder="choose the phone model" options={selectValidation} />
                            
                               <button  type="submit" onClick={()=> setValue("yes")}>submit</button>
                             
                               
                             </div>
                             

                            
                              
                             </>
                                                          
                        </Form>
                         )}
                         </Formik>
                         
                         
                          
                        
                      
    

  );
}

export default CustomFormValidation;