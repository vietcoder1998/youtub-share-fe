import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/form/LoginForm";
import { AppContext } from "../../contexts/AppContext";

export const Login: React.FC = () => {
  const { t } = useTranslation();

  const context = React.useContext(AppContext);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (context.isLogin) {
      navigate("/");
    }
  }, [context?.isLogin]);
  return (
    <Grid container>
      <Grid md={4}></Grid>
      <Grid md={4}>
        <div className="my-10 border-1 bg-white px-5 py-4">
          <p className={"mb-6 text-black font-bold text-xl"}>
            {t("login.header.loginHeader")}
          </p>
          <LoginForm className="flex flex-col gap-2" />
        </div>
      </Grid>
      <Grid md={4}></Grid>
    </Grid>
  );
};
