import React from 'react';
// import { Auth0Provider } from '@auth0/auth0-react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  Route
} from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';
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
  

]);

//const rootElement = document.getElementById('root');
const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="{yourDomain}"
      clientId="{yourClientId}"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>
      <div>{router}</div>
    </Auth0Provider>
  </React.StrictMode>
);

/*
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="{yourDomain}"
    clientId="{yourClientId}"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
*/