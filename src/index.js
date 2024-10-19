/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import GTM from 'react-gtm-module';

const gtmId = 'GTM-WSHP6GHZ'; 
const gtmAuth =  'HLMcCuRDJJXy7RYLvcab9w'; 
const gtmPreview =  'env-3'; 

const tagManagerArgs = {
  gtmId: gtmId,
  auth: gtmAuth,
  preview: gtmPreview
};

GTM.initialize(tagManagerArgs);

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "context";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
    <React.StrictMode>
      <App />
      </React.StrictMode>
    </MaterialUIControllerProvider>
  </BrowserRouter>
);