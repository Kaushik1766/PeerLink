import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import PageRouter from './PageRouter.jsx'
import App from './pages/Login.jsx';
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider>
    <PageRouter />
  </CookiesProvider>
)
