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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-recipe",
    element:
      <Layout
        searchValue={''}
        setSearchValue={() => { }}
        handleSearchBarChange={''}>
        <CreateRecipe />
      </Layout>
  },
  {
    path: "/show/:id",
    element:
      <Layout
        searchValue={''}
        setSearchValue={() => { }}
        handleSearchBarChange={''}>
        <ShowRecipe />
      </Layout>
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);