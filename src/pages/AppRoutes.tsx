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

  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/share"
          element={!data?.isLogin ? <PagePermission /> : <SharePage />}
        />
      </Routes>
    </DefaultLayout>
  );
};
