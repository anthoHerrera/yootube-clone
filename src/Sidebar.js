import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeIcon} title='Home' />
            <SidebarRow Icon={WhatshotIcon} title='Trending' />
            <SidebarRow Icon={SubscriptionsIcon} title='Subcription' />
            <hr />
        </div>
    )
}

export default Sidebar
