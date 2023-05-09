import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import SignIn from './Pages/Register/SignIn';
import Header from './Components/Header';
import Register from './Pages/Register/Register';
import Main from './Pages/Main/MainPage'
import { ClipLoader } from "react-spinners";
import { useEffect,useState } from 'react';


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
        path: '/main',
        element: <Main />,
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);


  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <ClipLoader color={"red"} loading={loading} size={30} />
      </div>
      ) : (
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
      )}
    </div>
  );
}

export default App;
