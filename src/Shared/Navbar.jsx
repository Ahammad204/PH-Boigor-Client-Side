import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo/logo.png"
import useAuth from "../Hooks/useAuth";


const Navbar = () => {

    const { user, logout } = useAuth()
    console.log(user)

    const navLink = <>

        <li ><NavLink to="/">Home</NavLink></li>
        {user && <>

            <li><NavLink to="/borrowedBook">Borrowed Book</NavLink></li>
            <li><NavLink to="/addBook">Add Book</NavLink></li>
            <li><NavLink to="/allBook">All Book</NavLink></li>
            <li><NavLink to="/addCategory">Add Category</NavLink></li>

        </>}


    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-500 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="  normal-case text-xl"><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end md:gap-3">

                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">

                                    <img src={user.photoURL} alt={user.displayName} />

                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm btn-ghost">{user.displayName}</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost"
                                        onClick={logout}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to="/login"><button className="btn text-white border-none bg-[#E59285] hover:bg-[#E59285]">Login Now</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;