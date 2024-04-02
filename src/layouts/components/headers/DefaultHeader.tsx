import { Button, Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../../contexts/AppContext";

export const DefaultHeader: React.FC = () => {
  const { t } = useTranslation();
  const data = React.useContext(AppContext);
  const navigate = useNavigate();
  const onNavigateToShare = () => {
    navigate("/share");
  };
  const onLogOut = () => {
    data.onLogout();
  };
  return (
    <header className="text-black flex px-20 py-4 sticky top-0 bg-white">
      <Grid container>
        <Grid item md={3}>
          <div className="font-bold text-xl">
            <Link to={"/"}>{t("common.header.funnyMovie")}</Link>
          </div>
        </Grid>
        <Grid item md={9} lg={9} xs={9}>
          <div className="flex justify-end gap-20">
            <div className="flex gap-2 justify-end w=[70%] items-center">
              <label className="">{t("common.header.welcome")}</label>
              <label className="font-bold">{data?.header?.user?.email}</label>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Button onClick={onNavigateToShare} variant="contained">
                {t("common.header.youtubeShare")}
              </Button>
              <Button onClick={onLogOut} variant="contained" color={"error"}>
                {t("common.header.logout")}
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </header>
  );
};
