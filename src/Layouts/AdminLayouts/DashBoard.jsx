import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";


const DashBoard = () => {
    return (
        <div >
            <Navbar></Navbar>
            <main className="w-11/12 mx-auto ">
                <div className="grid py-5 grid-cols-12 min-h-screen">
                    <div className="h-full col-span-3 flex flex-col items-center">
                    <NavLink className="p-2 my-3 border border-stone-500 w-full text-center hover:text-white hover:bg-[#E59285] hover:border-none" to="/dashboard">Admin Home</NavLink>
                        <NavLink className="p-2 my-3 border border-stone-500 w-full text-center hover:text-white hover:bg-[#E59285] hover:border-none" to="/dashboard/addBook">Add Book</NavLink>
                        <NavLink className="p-2 my-3 border border-stone-500 w-full text-center hover:text-white hover:bg-[#E59285] hover:border-none" to="/dashboard/allBook">All Book</NavLink>
                        <NavLink className="p-2 my-3 border border-stone-500 w-full text-center hover:text-white hover:bg-[#E59285] hover:border-none" to="/dashboard/addCategory">Add Category</NavLink>
                    </div>
                    <div className="col-span-9 h-full ml-28">
                        <Outlet></Outlet>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default DashBoard;