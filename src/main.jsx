import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './routes/LandingPage';
import './index.css';

import Errorpage from "./routes/Errorpage";
import Obrigado from './routes/pagina';

import{ createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <Errorpage/>
  },
  {
    path: "contact",
    element: <Contact/>,
    errorElement: <Errorpage/>
  },
  {
    path: "obrigado",
    element: <Obrigado/>,
    errorElement: <Errorpage/>
  }
])

import Home from "./routes/Home"
import Contact from "./routes/Contact"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);