import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import { Toaster } from "react-hot-toast";


const MainLayouts = () => {
    return (
        <div>
            <div className="max-w-7xl  mx-auto">
                <div>
                    <Navbar></Navbar>
                </div>
                <Outlet></Outlet>
            <div className="mt-10">
                <Footer></Footer>
            </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayouts;