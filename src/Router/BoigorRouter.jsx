import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[

        {

            path:'/',
            element: <Home></Home>

        }


      ]
    },
  ]);

export default router;