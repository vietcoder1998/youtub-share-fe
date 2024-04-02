import { UserInfo } from "./common";

export type Video = {
    _id: string;
    link: string;
    description: string;
    createdAt: string;
    title: string
    dislike: string[]
    like: string[]
    like: string[]
    user: UserInfo
}
