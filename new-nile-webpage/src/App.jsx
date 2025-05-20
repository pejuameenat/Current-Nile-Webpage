import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeNav, Home, About, Contact, PricingPage, Terms } from './Pages'
const routes = createBrowserRouter([{
  path: "/", element: <HomeNav />, children: [
    {index:true, element:<Home/>},

    {
      path:'About',
      element:<About/>
    },
    {
      path:'Pricing',
      element:<PricingPage/>
    },
    
    {
      path: 'Contact',
      element:<Contact/>
    },
    {
      path: 'Terms',
      element:<Terms/>
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
