import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Error/Error";
import BorrowedBooks from "../Pages/BorrowedBook/BorrowedBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./BoigorPrivate";
import AddBook from '../Layouts/AdminLayouts/Add Book/AddBook';
import AllBook from '../Layouts/AdminLayouts/All Book/AllBook';
import AddCategory from "../Layouts/AdminLayouts/AddCategory/AddCategory";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement:<Error></Error> ,
      children:[

        {

            path:'/',
            element: <Home></Home>,
            loader:()=> fetch('http://localhost:5000/category')

        },{

          path:'/borrowedBook',
          element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>

        },{

          path:'/login',
          element:<Login></Login>

        },{

          path:'/register',
          element:<Register></Register>

        },
        {

          path:'/addBook',
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>

        }
        ,
        {

          path:'/allBook',
          element:<PrivateRoute><AllBook></AllBook></PrivateRoute>

        }
        ,
        {

          path:'/addCategory',
          element:<PrivateRoute><AddCategory></AddCategory></PrivateRoute>

        }


      ]
    },
    
 


      ]

    
  );

export default router;