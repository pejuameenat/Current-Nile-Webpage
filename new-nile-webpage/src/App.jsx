import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeNav, Home, About, Contact } from './Pages'
import{Features} from './Components'
const routes = createBrowserRouter([{
  path: "/", element: <HomeNav />, children: [
    {index:true, element:<Home/>},

    {
      path:'About',
      element:<About/>
    },
    {
      path:'/#features',
      element:<Features/>
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
