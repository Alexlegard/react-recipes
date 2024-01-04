import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from "./App";
import CreateRecipe from './routes/CreateRecipe';
import ShowRecipe from './routes/ShowRecipe'
import Layout from './components/Layout';
import LoginButton from './auth/login';

const clientId = process.env.AUTH0_CLIENT_ID;

// index.js should be super simple, it's just your "entrypoint", don't overcrowd it
// note the BrowserRouter here is the "Router" that provides the context, leaving out this router
// causes your error (useRoutes is used by "Routes" and "Route" component internally I bet)

const Root = () => (
  <BrowserRouter>
    
    <Auth0Provider
      domain="localhost:3000"
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}>
      <LoginButton/>
      <App/>
      
    </Auth0Provider>
  </BrowserRouter>
)

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<Root/>)