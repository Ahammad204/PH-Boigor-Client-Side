import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";


const MainLayouts = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default MainLayouts;