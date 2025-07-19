import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Products from './pages/Products.jsx';
import Home from './pages/Home.jsx';
import Layout from './components/Layout.jsx';
import Checkout from './pages/Checkout.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "checkout",
        element: <Checkout />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
