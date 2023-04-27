import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import ViewDetails from './components/ViewDetails/ViewDetails';
import Home from './components/Home/Home';
import Statistic from './components/Statistic/Statistic';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/home",
        element:<PrivateRoute><Home></Home></PrivateRoute>,
        loader: () => fetch("FeaturedJob.json"),
      },
      {
        path: "/applied/:id",
        element: <AppliedJobs></AppliedJobs>,
        loader: ({ params }) => fetch(`/FeaturedJob.json/${params.id}`)
      },
      {
        path: "/applied",
        element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`/FeaturedJob.json/${params.id}`)
      },
      {
        path: "/viewDetails",
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/statistics",
        element: <PrivateRoute><Statistic></Statistic></PrivateRoute>
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blog></Blog></PrivateRoute>,
      },

    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
