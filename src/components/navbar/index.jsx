import { CgMoveLeft, CgMoveRight } from "react-icons/cg";
import './style.scss';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-container-logo">Natural Cleansing</div>
            <div className="navbar-container-icon">
                <CgMoveLeft />
                {/* <CgMoveRight /> */}
            </div>
        </div>
    );
};

export default Navbar;
