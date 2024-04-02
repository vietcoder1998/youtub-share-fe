import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const PagePermission: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onNavigateToHome = () => navigate("/");

  return (
    <div className="w-full h-[400px] bg-white flex mt-[100px] text-black justify-center items-center text-2xl">
      <div>
        <div className="mb-5">
          <label>{t("common.page.permissionError")}</label>
        </div>
        <div>
          <Button onClick={onNavigateToHome} variant="contained">
            {t("common.ui.backToHome")}
          </Button>
        </div>
      </div>
    </div>
  );
};
