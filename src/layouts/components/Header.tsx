import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="text-black flex">
      <Grid container>
        <Grid item md={3}>
          <div>{t("common.header.youtubeShare")}</div>
        </Grid>
        <Grid item md={9} lg={9} xs={9} >
          <div className="flex items-center justify-end w-full">
            {t("common.header.youtubeShare")}
          </div>
        </Grid>
      </Grid>
    </header>
  );
};
