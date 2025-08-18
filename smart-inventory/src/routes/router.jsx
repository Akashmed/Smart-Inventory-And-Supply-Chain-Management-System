import {
  createBrowserRouter
} from "react-router-dom";
import Banner from "../Pages/Home/Banner/Banner";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
   children: [
      {
        path: "/banner",
        element: <Banner />,
      },
    ]
  },
]);

export default router;