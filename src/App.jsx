import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mainlayout from "./component/Mainlayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";   
 
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
        path: "/contact" ,
        element: <ContactPage />
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