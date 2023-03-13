import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css';
import App from "./App";
import CreateRecipe from './routes/CreateRecipe';
import UpdateRecipe from './routes/UpdateRecipe';
import DeleteRecipe from './routes/DeleteRecipe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-recipe",
    element: <CreateRecipe />
  },
  {
    path: "/update-recipe",
    element: <UpdateRecipe />
  },
  {
    path: "/delete-recipe",
    element: <DeleteRecipe />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);