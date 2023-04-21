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
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-recipe",
    element:
      <div>
        <Header name="Alex" />
        <CreateRecipe />
        <Footer />
      </div>
  },
  {
    path: "/update-recipe",
    element:
      <div>
        <Header />
        <UpdateRecipe />
        <Footer/>
      </div>
    
  },
  {
    path: "/delete-recipe",
    element:
      <div>
        <Header />
        <DeleteRecipe />
        <Footer />
      </div>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);