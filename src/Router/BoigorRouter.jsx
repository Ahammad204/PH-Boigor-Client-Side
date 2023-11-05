import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Error/Error";
import AddBook from "../Pages/Add Book/AddBook";
import AllBook from "../Pages/All Book/AllBook";
import BorrowedBooks from "../Pages/BorrowedBook/BorrowedBooks";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement:<Error></Error> ,
      children:[

        {

            path:'/',
            element: <Home></Home>,

        },{

          path:'/addBook',
          element: <AddBook></AddBook>

        },{

          path:'/allBook',
          element:<AllBook></AllBook>

        },{

          path:'/borrowedBook',
          element:<BorrowedBooks></BorrowedBooks>

        }


      ]
    },
  ]);

export default router;