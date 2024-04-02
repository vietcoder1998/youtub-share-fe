import { Socket } from "socket.io-client"
import { SystemLanguage } from "../config/constants"

export type UserInfo = {
    id: string
    email: string
    username: string
    token?: string
}

export enum CookieName {
    authenticate = 'YoutubeShareAuthenticate',
    userInfo = 'YoutubeShareUserInfoProvider',
}

export type DataList<T>  ={
    dataList: T[]
    page: number
    size: number
    total: number
}

export type Detail<T> ={
    detail: T
}

export type DefaultResponse = {
    message: string
    language: SystemLanguage
    messageKey: string
    queue: string
    timeout: number
}

export type QueryList = {
    index?: number
    size?: number
}

export type DeleteResponse = DefaultResponse
export type DataListResponse<T> = DefaultResponse & DataList<T>
export type DetailResponse<T> = DefaultResponse & Detail<T>
export type Register = {
    code: number 
}

export enum RequestStatus {
    default = "",
    success = "success",
    pending = "pending",
    error = "error",
    finished = "finished"
}

export type PageState = {
    scroll: {
        x: number
        y: number
    }
}

export type AppContextType = {
    header: HeaderProps
    pageState?: PageState
    onLogout: () => void
    isLogin: boolean
    socket: Socket
}
export type HeaderProps = {
    isLogin: boolean
    user: UserInfo
}

