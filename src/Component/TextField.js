import React from 'react'
import {ErrorMessage, Field, useField} from 'formik'

function TextField({label,...props}) {
    // console.log('props data' ,props)
    // console.log('name data' )
    const[field,meta]=useField(props);
    
  return (
    <div className='my-2'>
    <label htmlFor={field.name}>{label}</label>
    <input className={`form-control shadow-non ${meta.touched && meta.error && 'is-invalid'}`}
    {...field}{...props} autoComplete='off'/>

    <ErrorMessage component='div' name={field.name} className='error'/>

    </div>
  )
}

export default TextField;