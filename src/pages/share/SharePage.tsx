import { Box, Button, CircularProgress, Grid, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { VideoApi } from "../../api/video.api";
import { RequestStatus } from "../../types/common.d";

export type ShareLink = {
  link: string;
};

export const SharePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShareLink>();
  const [status, setStatus] = React.useState<RequestStatus>(
    RequestStatus.default
  );
  const { t } = useTranslation();

  const onSubmitVideo = async (values: { link: string }) => {
    console.log(values.link);
    
    VideoApi.apiInstance
      .shareVideo(values.link)
      .then((response) => {
        if (response) {
          setStatus(RequestStatus.success);
        }
      })
      .catch((error) => {
        if (error) {
          setStatus(RequestStatus.error);
        }
      });
  };
  return (
    <Grid container>
      <Grid md={4}></Grid>
      <Grid md={4}>
        <div className="bg-white text-black px-20 py-10 mt-20">
          <Box component="form" onSubmit={handleSubmit(onSubmitVideo)}>
            <fieldset className="border-1 border-indigo-600">
              <legend>{t("share.header.shareTitle")}</legend>
              <div className={'mb-4'}>
                <TextField
                  error={Boolean(errors.link?.message)}
                  helperText={errors.link?.message}
                  fullWidth
                  {...register("link", {
                    required: true,
                    pattern: {
                      value:
                        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
                      message: t("share.error.errorLink"),
                    },
                  })}
                ></TextField>
              </div>
              <div className={'mt-2'}>
                <Button variant="contained" type="submit" fullWidth>
                  {status === RequestStatus.pending && <CircularProgress />}
                  {status === RequestStatus.default && t("share.button.submit")}
                </Button>
              </div>
            </fieldset>
          </Box>
        </div>
      </Grid>
      <Grid md={4}></Grid>
    </Grid>
  );
};
