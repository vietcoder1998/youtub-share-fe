import { UserInfo } from "../../../types/common";
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

export const exampleData = [
  {
    id: "1",
    link: "https://youtu.be/1w7OgIMMRc4?si=yZNvDIfpJiI3B8HB",
    like: 10,
    dislike: 20,
    title: "test",
    description: "test description",
    user: {
      gmail: "gmail@test.com",
      id: "test",
    },
  },
  {
    id: "2",
    link: "https://youtu.be/embed/1w7OgIMMRc4?si=yZNvDIfpJiI3B8HB",
    like: 10,
    dislike: 20,
    title: "test",
    description: "test description",
    user: {
      gmail: "gmail@test.com",
      id: "test",
    },
  },
  {
    id: "2",
    link: "https://youtu.be/1w7OgIMMRc4?si=yZNvDIfpJiI3B8HB",
    like: 10,
    dislike: 20,
    title: "test",
    description: "test description",
    user: {
      gmail: "gmail@test.com",
      id: "test",
    },
  },
] as VideoItemData[];
export const VideoList: React.FC = () => {
  return (
    <div className="video-list">
      {exampleData.map((item, index) => (
        <VideoItem key={["video", index].join("-")} video={item} />
      ))}
    </div>
  );
};
