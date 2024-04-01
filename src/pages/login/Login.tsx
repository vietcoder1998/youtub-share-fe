import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LoginForm } from "../../components/form/LoginForm";

export const Login: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Grid container>
      <Grid md={4}></Grid>
      <Grid md={4}>
        <div className="my-10 border-1 bg-white px-5 py-4">
          <p className={"mb-6 text-black font-bold text-xl"}>{t("login.header.loginHeader")}</p>
          <LoginForm />
        </div>
      </Grid>
      <Grid md={4}></Grid>
    </Grid>
  );
};
