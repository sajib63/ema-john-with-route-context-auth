
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './Components/Shop/Shop'
import Orders from './Components/Orders/Orders';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import { productsAndCartLoader } from './Loaders/productsAndCartLoader';




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
          element:<Orders></Orders>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'inventory',
          element:<Inventory></Inventory>
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
