import React from 'react';
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import TextField from './TextField';
import {Link} from  'react-router-dom'

function Signup() {
    const initialValues={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',

    }

     const validationSchema=Yup.object({
         firstName:Yup.string().required('required'),
         lastName:Yup.string().required('Required'),
         email:Yup.string().email('Email is invalid').required('Required'),
         password:Yup.string().min(8,'Password must be 8 character').required('Required'),
         confirmPassword:Yup.string()
         .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Required")


     })
     const onSubmit=(values)=>{
         console.log('form data',values)
     }
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
    {
        formik=>{
            
        return(
    <div className='form'>
        <h1 className='my-4 font-weight-bold display-4 Text' >Signup Form</h1>
        <Form className='custom-form'>
            <TextField label='First Name' name='firstName' type='text'/>
            <TextField label='Last Name' name='lastName' type='text'/>            
            <TextField label='Email' name='email' type='email'/> 
            <TextField label='Password' name='password' type='password'/>
            <TextField label='Confirm Password' name='confirmPassword' type='password'/>
            <div className="col-md-12 text-center">
          <Link to='/Routing'>
          <button className='btn btn-danger mt-3 '  type='submit'>Submit</button>
          </Link> 
            </div>
                   

        </Form>
        
    </div>
        )
        }
    }
    
    


    </Formik>
  )
}

export default Signup