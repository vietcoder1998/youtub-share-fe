import { UserInfo } from "./common";

export type Video = {
    id: string;
    link: string;
    description: string;
    createdAt: string;
    title: string
    dislike: string[]
    like: string[]
    user: UserInfo
}
