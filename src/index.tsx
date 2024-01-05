import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css';
import App from "./App";
import CreateRecipe from './routes/CreateRecipe';
import ShowRecipe from './routes/ShowRecipe'
import Layout from './components/Layout';
import Register from './auth/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-recipe",
    element:
      <Layout
        handleSearchBarSubmit={''}>
        <CreateRecipe />
      </Layout>
  },
  {
    path: "/show/:id",
    element:
      <Layout
        handleSearchBarSubmit={''}>
        <ShowRecipe />
      </Layout>
  },
  {
    path: "/register",
    element:
      <Layout
        handleSearchBarSubmit={''}>
        <Register />
      </Layout>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);