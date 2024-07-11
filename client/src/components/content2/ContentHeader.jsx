import React from 'react'
import { BiMenu } from 'react-icons/bi';
const ContentHeader = () => {
  return (
    <header className='header_dashboard'>
    <div class="header-content">
        <label for="menu-toggle">
        <BiMenu classeName='icon'/>
        </label>
        
        <div class="header-menu">
            <label for="">
                <span class="las la-search"></span>
            </label>
            
            <div class="notify-icon">
                <span class="las la-envelope"></span>
                <span class="notify">4</span>
            </div>
            
            <div class="notify-icon">
                <span class="las la-bell"></span>
                <span class="notify">3</span>
            </div>
            
            <div class="user">
                <div class="bg-img"></div>
                
                <span class="las la-power-off"></span>
                <span>Logout</span>
            </div>
        </div>
    </div>
</header>
  )
}

export default ContentHeader