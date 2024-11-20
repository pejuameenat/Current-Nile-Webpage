import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomeNav, Home, About, Contact} from './Pages'
const routes = createBrowserRouter([{
  path: "/", element: <HomeNav />, children: [
    {index:true, element:<Home/>},
    {
      path:'About',
      element:<About/>
    },
    {
      path: 'Contact',
      element:<Contact/>
    }
  ]
  
 }]);
const App = () => {
  return (
    <main>
      <RouterProvider router={routes} />
    </main>
  );
};

export default App;
