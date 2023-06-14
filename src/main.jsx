import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Provieders/AuthProvider';




ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        {" "}
        <RouterProvider router={router} />
      </AuthProvider>{" "}
    </React.StrictMode>
  </div>
);
