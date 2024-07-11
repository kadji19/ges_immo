import React from 'react'
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle, } from 'react-icons/bi';
import './sidebar.css'
import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div class="sidebar">
    <div class="side-header">
        <div className="logo">
            <a href=""><img src={logo} alt=""/></a>
        </div>
    </div>
    
    <div class="side-content">
        <div class="profile">
            <div class="profile-img bg-img"></div>
            <h4>David Green</h4>
            <small>Art Director</small>
        </div>

        <div class="side-menu">
            <ul>
                <li>
                   <Link className='nav_link_dash active' to='homedashboard'>
                        <BiHome classeName='icon'/>
                        <small>Dashboard</small>
                    </Link>
                </li>
                <li>
                   <Link className='nav_link_dash' to='property'>
                        <BiHelpCircle classeName='icon'/>
                        <small>Proprété</small>
                    </Link>
                </li>
                <li>
                   <Link to='candidature' className='nav_link_dash' href="">
                        <BiMessage classeName='icon'/>
                        <small>Candidature</small>
                    </Link>
                </li>

            </ul>
        </div>
    </div>
</div>
  )
}

export default Sidebar