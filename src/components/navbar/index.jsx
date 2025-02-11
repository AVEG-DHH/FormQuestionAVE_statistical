import { CgMoveLeft, CgMoveRight } from "react-icons/cg";
import './style.scss';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="navbar-container">
            <div className="navbar-container-logo">Natural Cleansing</div>
            <div className="navbar-container-icon">
                {
                    isSidebarOpen ? <CgMoveLeft onClick={toggleSidebar} /> : <CgMoveRight onClick={toggleSidebar} />
                }
            </div>
        </div>
    );
};

export default Navbar;
