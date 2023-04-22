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
import ShowRecipe from './routes/ShowRecipe'
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-recipe",
    element:
      <Layout>
        <CreateRecipe />
      </Layout>
  },
  {
    path: "/update-recipe",
    element:
      <Layout>
        <UpdateRecipe />
      </Layout>
  },
  {
    path: "/delete-recipe",
    element:
      <Layout>
        <DeleteRecipe />
      </Layout>
  },
  {
    path: "/show/:id",
    element:
      <Layout>
        <ShowRecipe />
      </Layout>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);