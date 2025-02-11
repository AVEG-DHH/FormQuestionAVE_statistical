import Navbar from '../navbar';
import Sidebar from '../sidebar';

import { Outlet } from 'react-router-dom';

import './style.scss';

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="layout-container">
                <div className="layout-container-sidebar">
                    <Sidebar />
                </div>
                <div className="layout-container-content">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout;
