import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { HomePage } from "./home-page/HomePage";
import { Login } from "./login/Login";
import { Register } from "./register/Register";
import { SharePage } from "./share/SharePage";
import { AppContext } from "../contexts/AppContext";
import React from "react";
import { PagePermission } from "./403/403";

export const AppRoutes: React.FC = () => {
  const data = React.useContext(AppContext);
  React.useEffect(() => {});

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        }
      />
      <Route
        path="/login"
        element={
          <DefaultLayout>
            <Login />
          </DefaultLayout>
        }
      />
      <Route
        path="/register"
        element={
          <DefaultLayout>
            <Register />
          </DefaultLayout>
        }
      />
      <Route
        path="/share"
        element={
          <DefaultLayout>
            <SharePage />
          </DefaultLayout>
        }
      />
    </Routes>
  );
};
