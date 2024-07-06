import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../header/Header'
/* import Footer from '../Footer/Footer'*/
import Home from '../../pages/home/Home' 
import Vendre from '../../pages/vendre/Vendre'

const layout = () => {
  return (
    <div>
        <Header/>
        <div className="content">
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/vendre' element={<Vendre/>} />
        </Routes>
        </div>
      {/*   <Footer/> */}
    </div>
  )
}

export default layout
