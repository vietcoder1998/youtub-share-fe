import { Box, Button, CircularProgress, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthenticateHelper from "../../helpers/authenticate.helper";
import { RequestStatus, UserInfo } from "../../types/common.d";
export type LoginFormType = {
  email: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();
  const [status, setStatus] = React.useState<RequestStatus>(
    RequestStatus.default
  );
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onSubmit = async (values: LoginFormType) => {
    setStatus(RequestStatus.pending);
    const result: UserInfo | undefined =
      await AuthenticateHelper.instance.handleLogin(
        values.email,
        values.password
      );

    if (result) {
      navigate("/");
    } else {
      toast.error(t("login.request.failed"));
    }
  };

  return (
    <Box component="form" id="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <TextField
          error={Boolean(errors.email)}
          fullWidth={true}
          helperText={errors.email?.message}
          size="small"
          {...register("email", {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: t("login.error.errorEmailPattern"),
            },
            required: t("login.error.errorEmailRequired"),
          })}
          placeholder={t("login.input.emailPlaceholder")}
        ></TextField>
      </div>
      <div className="mb-6">
        <TextField
          className="my-10"
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          type="password"
          fullWidth={true}
          size="small"
          {...register("password", {
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message: t("login.error.errorPasswordPattern"),
            },
            required: t("login.error.errorPasswordRequired"),
          })}
          placeholder={t("login.input.passwordPlaceholder")}
        ></TextField>
      </div>
      <Button variant="contained" type={"submit"} fullWidth={true}>
        {status === RequestStatus.pending && <CircularProgress />}
        {status !== RequestStatus.pending && t("common.ui.submit")}
      </Button>
    </Box>
  );
};
