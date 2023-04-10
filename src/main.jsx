import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import AppliedJob from './components/AppliedJob/AppliedJob';
import Blog from './components/Blog/Blog';
import ViewDetails from './components/ViewDetails/ViewDetails';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch("FeaturedJob.json"),
      },
      {
        path: "/statistics/:id",
        element:<Statistics></Statistics>,
        loader:({params}) => fetch(`/FeaturedJob.json/${params.id}`)
      },
      {
        path: "/viewDetails/:id",
        element:<ViewDetails></ViewDetails>,
        loader:({params}) => fetch(`/FeaturedJob.json/${params.id}`)
      },
      {
        path: "/applied",
        element:<AppliedJob></AppliedJob>,
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
