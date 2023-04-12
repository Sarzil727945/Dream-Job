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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch("FeaturedJob.json"),
      },
      {
        path: "/applied/:id",
        element:<AppliedJobs></AppliedJobs>,
        loader:({params}) => fetch(`/FeaturedJob.json/${params.id}`)
      },
      {
        path: "/applied",
        element:<AppliedJobs></AppliedJobs>,
      },
      {
        path: "/viewDetails/:id",
        element:<ViewDetails></ViewDetails>,
        loader:({params}) => fetch(`/FeaturedJob.json/${params.id}`)
      },
      {
        path: "/viewDetails",
        element:<ViewDetails></ViewDetails>,
      },
      {
        path: "/statistics",
        element:<Statistic></Statistic>
      },
      {
        path: "/blog",
        element:<Blog></Blog>,
      },
      
    ]  
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
