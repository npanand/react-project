import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as up from 'yup';


const FormCheckUp=()=>{
    const[data,setData]=useState({});
    
    const checking = up.object().shape({
        name: up.string().min(3, 'low letter').max(5, 'overword').required('name important'),
        email: up.string().email('invalid email').required('email important'),
        password: up.string().min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol').required("password is important"),
        picked: up.string().required("impo"),
        rangenumber: up.string().required("importanet"),
    });
    
    
    // const detailValue=(values:any)=>{
    // }
  //  console.log(da);
    return (
        
        <div>
            <h1> signup</h1>
            <Formik initialValues={{ name: '', email: '', password: '', picked: '', rangenumber: '', checkboxs: [] }} validationSchema={checking}
                onSubmit={(values, actions) => {
                    setData({
                        name: values.name, email: values.email, password: values.password, picked: values.picked, rangenumber:  values.rangenumber, checkboxs: values.checkboxs ,show:true,
                       });

                }} >
                {
                    ({values, errors, touched, handleBlur, handleChange, isSubmitting, handleSubmit }) =>


                        <Form >
            
                            <label htmlFor='name'> name:</label>
                            <Field name="name" id="name" type="text"  onChange={handleChange} value={values.name} />
                            <ErrorMessage component="h1" name="name" />
                            <br/>
                            <label htmlFor='email'>email:</label>
                            <Field name="email" type="email" />
                            
                            <ErrorMessage name="email" component="h1" />
                            <br/>
                            <label htmlFor='password'> password:</label>
                            <Field name="password" type="password" />
                            <ErrorMessage name="password" component="h1" />
                            <br/>
                            <label htmlFor='checkbox'> picked:</label>
                            <div role='group' aria-labelledby='checkbox'>
                                <label >
                                    <Field type="radio" name="picked" value="red" />
                                    red
                                </label>
                                <label>
                                    <Field type="radio" name="picked" value="blue" />
                                    blue
                                </label>
                                <label>
                                    <Field type="radio" name="picked" value="yellow" />
                                    yellow
                                </label>
                            </div>
                            <ErrorMessage name="picked" component="h1" />
                            <label htmlFor='chackbox'>rangenumber:</label>
                            <div role='group' aria-labelledby='chackbox'>
                                <label>
                                    <Field name="rangenumber" type="radio" value="1" />
                                    1
                                </label>
                                <label>
                                    <Field name="rangenumber" type="radio" value="1" />
                                    2
                                </label>
                                <label>
                                    <Field name="rangenumber" type="radio" value="1" />
                                    3
                                </label>
                            </div>
                            <ErrorMessage name="picked" component="h1" />
                            <br/>
                            <label htmlFor="check">checkbox</label>
                            <div role='group' aria-labelledby='check'>
                                <label>
                                    <Field name="checkboxs" type="checkbox" value="one" />
                                    one
                                </label>
                                <label >
                                    <Field name="checkboxs" type="checkbox" value="two" />
                                    two
                                </label>
                                <label >
                                    <Field name="checkboxs" type="checkbox" value="three" />
                                    three
                                </label>
                            </div>
                            <ErrorMessage name='checkboxs' component="h1" />
                            <button type="submit" >submit</button>

                        </Form>
                }
            </Formik>
           
            
           
        </div>
        
    );
}

export default FormCheckUp;