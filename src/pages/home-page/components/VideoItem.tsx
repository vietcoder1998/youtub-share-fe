import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { IconButton } from "@mui/material";
import React, { Key } from "react";
import { useTranslation } from "react-i18next";
import { VideoApi } from "../../../api/video.api";
import { AppContext } from "../../../contexts/AppContext";
import { Video } from "../../../types/home-page";

type VideoItemProps = {
  video: Video;
  key: Key;
};

export const VideoItem: React.FC<VideoItemProps> = (props: VideoItemProps) => {
  const {
    header: { user },
    isLogin,
  } = React.useContext(AppContext);
  const [videoDetail, setVideoDetail] = React.useState<Video>(props.video);
  const handleLike = () => {
    VideoApi.apiInstance.postLike(props.video._id).then((response) => {
      if (response.data.detail) {
        setVideoDetail(response.data.detail);
      }
    });
  };

  const handleDislike = () => {
    VideoApi.apiInstance.postDislike(props.video._id).then((response) => {
      if (response.data.detail) {
        setVideoDetail(response.data.detail);
      }
    });
  };
  const { t } = useTranslation();

  return (
    <div
      className="video-item flex gap-10 mb-10 "
      data-testid={`video-${props.video._id}`}
    >
      <div>
        {props.video.link && (
          <iframe
            width="420"
            height="345"
            src={props.video.link}
            title={props.video.title}
          ></iframe>
        )}
        {!props.video.link && (
          <div className="bg-grey-200 w-[420px] h-[345px]">No item found</div>
        )}
      </div>
      <div className="">
        <div className="justify-start flex text-2xl capitalize">
          {props.video.title}
        </div>
        <div className="flex justify-start">
          <label className="mr-2">{t("homepage.video.shareBy")}</label>
          <label>{props.video.user.email}</label>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <label>{videoDetail.like.length}</label>
            <IconButton onClick={handleLike} disabled={!isLogin}>
              {videoDetail?.like?.includes(user.id) && <ThumbUpIcon />}
              {!videoDetail?.like?.includes(user.id) && <ThumbUpOffAltIcon />}
            </IconButton>
            <label>{videoDetail.dislike.length}</label>

            <IconButton
              onClick={handleDislike}
              id={props.video._id}
              disabled={!isLogin}
            >
              {videoDetail?.dislike?.includes(user.id) && <ThumbDownAltIcon />}
              {!videoDetail?.dislike?.includes(user.id) && (
                <ThumbDownOffAltIcon />
              )}
            </IconButton>
          </div>
        </div>
        <div className="justify-start">
          <p className="text-1.2rem flex justify-start font-bold capitalize">
            {t("homepage.video.description")}
          </p>
          <p className="text-1rem flex justify-start">
            {props.video.description}
          </p>
        </div>
      </div>
    </div>
  );
};
