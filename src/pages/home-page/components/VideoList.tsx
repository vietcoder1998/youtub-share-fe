import React from "react";
import { VideoApi } from "../../../api/video.api";
import { DataList, UserInfo } from "../../../types/common";
import { Video } from "../../../types/home-page";
import { VideoItem } from "./VideoItem";

export type VideoItemData = {
  id: string;
  link: string;
  like: number;
  dislike: number;
  title: string;
  description: string;
  user: UserInfo;
};

export const VideoList: React.FC = () => {
  const [youtubeList, setYoutubeList] = React.useState<Video[]>([] as Video[]);
  React.useEffect(() => {
    VideoApi.apiInstance.getList<DataList<Video>>().then((response) => {
      if (response.data.dataList) {
        setYoutubeList(response.data.dataList);
      }
    });
  }, []);
  return (
    <div className="video-list">
      {youtubeList.map((item, index) => (
        <VideoItem key={["video", index].join("-")} video={item} />
      ))}
    </div>
  );
};
