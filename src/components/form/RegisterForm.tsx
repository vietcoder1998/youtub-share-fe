import { Box, Button, CircularProgress, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthenticateHelper from "../../helpers/authenticate.helper";
import { RequestStatus, UserInfo } from "../../types/common.d";
export type RegisterFormType = {
  email: string;
  password: string;
};

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>();
  const [status, setStatus] = React.useState<RequestStatus>(
    RequestStatus.default
  );
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onSubmit = async (values: RegisterFormType) => {
    setStatus(RequestStatus.pending);
    const result: UserInfo | undefined =
      await AuthenticateHelper.instance.handleRegister(
        values.email,
        values.password
      );

    if (result) {
      navigate("/login");
    } else {
      toast.error(t("register.request.failed"));
    }
  };

  return (
    <Box component="form" id="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <TextField
          error={Boolean(errors.email)}
          fullWidth={true}
          helperText={errors.email?.message}
          size="small"
          {...register("email", {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: t("register.error.errorEmailPattern"),
            },
            required: t("register.error.errorEmailRequired"),
          })}
          placeholder={t("register.input.emailPlaceholder")}
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
              message: t("register.error.errorPasswordPattern"),
            },
            required: t("register.error.errorPasswordRequired"),
          })}
          placeholder={t("register.input.passwordPlaceholder")}
        ></TextField>
      </div>
      <Button variant="contained" type={"submit"} fullWidth={true}>
        {status === RequestStatus.pending && <CircularProgress />}
        {status !== RequestStatus.pending && t("common.ui.submit")}
      </Button>
    </Box>
  );
};
