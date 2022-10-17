
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './Components/Shop/Shop'
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import { productsAndCartLoader } from './Loaders/productsAndCartLoader';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './Routes/PrivateRoute';




function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('products.json'),
          element:<Shop></Shop>
        },
        
        {
          path:'orders',
          loader:productsAndCartLoader,
          element:<PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path:'about',
          element:<PrivateRoute>
            <About></About>
          </PrivateRoute>
        },
        {
          path:'inventory',
          element:<PrivateRoute>
            <Inventory></Inventory>
          </PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/shipping',
          element:<PrivateRoute>
            <Shipping></Shipping>
          </PrivateRoute>
        }

      ]
    }
  ])
  return (
    <div>
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
