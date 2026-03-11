import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mainlayout from "./component/Mainlayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";   
import Shop from "./pages/Shop";
import Productpage from "./pages/Productpage";
import Blog from "./component/Blog";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/blog" ,
        element: <Blog />
      },
      {
        path: "/shop" ,
        element: <Shop />
      },

      {
        path: "/product" ,
        element: <Productpage />
      },
      	{
				path: "*",
				element: <NotFound />,
			}
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App