import Navbar from '../navbar';
import Sidebar from '../sidebar';

import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import './style.scss';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <>
            <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <div className="layout-container">
                <div className={`layout-container-sidebar ${isSidebarOpen ? 'open-sidebar' : 'close-sidebar'}`}>
                    <Sidebar />
                </div>
                <div className={`layout-container-content ${isSidebarOpen ? '' : 'full-content'}`} >
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;
