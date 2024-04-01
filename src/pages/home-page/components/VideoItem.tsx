import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { IconButton } from "@mui/material";
import React, { Key } from "react";
import { useTranslation } from "react-i18next";
import { VideoItemData } from "./VideoList";

type VideoItemProps = {
  video: VideoItemData;
  key: Key;
};

export const VideoItem: React.FC<VideoItemProps> = (props: VideoItemProps) => {
  const handleLike = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = (event.target as HTMLButtonElement).id;
    //TODO: handle click Like in here

    return id;
  };

  const handleDislike = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id = (event.target as HTMLButtonElement).id;
    // TODO: handle click dislike in here
    return id;
  };
  const { t } = useTranslation();

  return (
    <div className="video-item flex gap-10 mb-10 " data-testid={`video-${props.video.id}`}>
      <div>
        <iframe width="420" height="345" src={props.video.link}></iframe>
      </div>
      <div className="">
        <div className="justify-start flex text-2xl capitalize">
          {props.video.title}
        </div>
        <div>
          <label className="mr-2">{t("homepage.video.shareBy")}</label>
          <label>{props.video.user.gmail}</label>
        </div>
        <div>
          <div className="flex gap-2">
            <label>
              {props.video.like}
              <IconButton onClick={handleLike}>
                <ThumbUpOffAltIcon />
              </IconButton>
            </label>
            <label>
              {props.video.dislike}
              <IconButton onClick={handleDislike} id={props.video.id}>
                <ThumbDownOffAltIcon />
              </IconButton>
            </label>
          </div>
        </div>
        <div className="justify-start">
          <p className="text-1.2rem flex justify-start font-bold capitalize">{t("homepage.video.description")}</p>
          <p className="text-1rem flex justify-start">{props.video.description}</p>
        </div>
      </div>
    </div>
  );
};
