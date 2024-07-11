import React from 'react';
import Sidebar from '../../components/sidebar2/Sidebar';
import Content from '../../components/content2/Content';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <input type="checkbox" id="menu-toggle"></input>
        <Sidebar/>
        <div className="dashboard--content">
            <Content/>
        </div>
    </div>
  );
}

export default Dashboard;
