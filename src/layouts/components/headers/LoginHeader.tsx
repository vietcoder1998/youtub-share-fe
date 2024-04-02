import { Button, Grid } from "@mui/material";
import { LoginForm } from "../../../components/form/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginHeader: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onNavigateToLogin = () => {
    navigate("/login");
  };
  const onNavigateToRegister = () => {
    navigate("/register");
  };

  return (
    <header className="text-black flex px-20 py-4 sticky top-0 bg-white">
      <Grid container>
        <Grid item md={3}>
          <div className="font-bold text-xl">
            <Link to={"/"}>{t("common.header.funnyMovie")}</Link>
          </div>
        </Grid>
        {["/"].includes(window.location.pathname) && (
          <Grid item md={9}>
            <LoginForm className={"flex items-center justify-end"} />
          </Grid>
        )}
        {["/login"].includes(window.location.pathname) && (
          <Grid item md={9}>
            <div className="flex justify-end w-full">
              <Button variant="contained" onClick={onNavigateToRegister}>
                {t("common.header.register")}
              </Button>
            </div>
          </Grid>
        )}

        {["/register"].includes(window.location.pathname) && (
          <Grid item md={9}>
            <div className="flex justify-end w-full">
              <Button variant="contained" onClick={onNavigateToLogin}>
                {t("common.header.login")}
              </Button>
            </div>
          </Grid>
        )}
      </Grid>
    </header>
  );
};

export default LoginHeader;
