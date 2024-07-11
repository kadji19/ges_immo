import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentHeader from './ContentHeader';
import './content.css'
import HomeDashboard from '../../pages/homeDashborad/HomeDashboard';
import NewPosteProperty from '../../pages/newPosteProperty/NewPosteProperty';
import Property from '../../pages/property/Property';
import Candidature from '../../pages/candidature/Candidature';
const Content = () => {
  return (
    <div className='content'>
        <ContentHeader/>
        <div className='main'>
            {/* <Property/> */}
            {/* <NewPosteProperty/> */}
            {/* <HomeDashboard/> */}
              <Routes>
                <Route path="homedashboard" element={<HomeDashboard />} />
                <Route path="property" element={<Property />} />
                <Route path="property/newposteproperty" element={<NewPosteProperty />} />
                <Route path="candidature" element={<Candidature />} />
              </Routes>
        </div>
    </div>
  )
}

export default Content