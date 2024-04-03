import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { HomePage } from "./home-page/HomePage";
import { Login } from "./login/Login";
import { Register } from "./register/Register";
import { SharePage } from "./share/SharePage";

export const AppRoutes: React.FC = () => {
  React.useEffect(() => {});

  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/share" element={<SharePage />} />
      </Routes>
    </DefaultLayout>
  );
};
