import React from 'react'
import '../src/App.css'
import Signup from './Component/Signup'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Routing from './Component/Routing';

function App() {
  return (
    
    <div className='container mt-3'>
        <div className='row'>
            <div className='col-md-5'>
          
            <BrowserRouter>
                <Routes>
                   <Route path='/' element={<Signup/>}/>
                    <Route path='/Routing' element={<Routing/>}/>
                </Routes>
                </BrowserRouter>
            
                
            </div>
        </div>
    </div>
    
  )
}

export default App