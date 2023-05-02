import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import SignIn from './Pages/Register/SignIn';
import Header from './Components/Header';
import Register from './Pages/Register/Register';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '*',
        element: <h1>Error</h1>,
      },
    ],
  },
  {
    element: <SignIn />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <h1>Error</h1>,
      },
    ],
  },
  {
    element: <Register />,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/signin',
        element: <SignIn/>,
      },
      {
        path: '*',
        element: <h1>Error</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
}

export default App;
