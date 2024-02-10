import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';
import AccountProfile from './components/Account/AccountProfile.jsx';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Home/>),
    },
    {
      path: "login",
      element: <Login/>,
    },
    {
        path: "signup",
        element: <Signup/>,
      },
      {
        path: "account",
        element: <AccountProfile/>,
      }
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)
