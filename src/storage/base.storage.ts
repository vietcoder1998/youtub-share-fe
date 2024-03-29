import { AxiosRequestConfig } from 'axios';
import BaseApi from "../api"
import { ModalName, SystemLanguage } from "../config/constants"

export enum CookieName {
    authenticate = 'YoutubeShareAuthenticate',
    userInfo = 'YoutubeShareUserInfoProvider',
}

export interface DataList<T> {
    dataList: T[]
    page: number
    size: number
    total: number
}

export interface Detail<T> {
    detail: T
}

export interface DefaultResponse {
    message: string
    language: SystemLanguage
    messageKey: string
    queue: string
    timeout: number
}

export type DeleteResponse = DefaultResponse
export type DataListResponse<T> = DefaultResponse & DataList<T>
export type DetailResponse<T> = DefaultResponse & Detail<T>

export class StorageItem<T> implements DataList<T>{
    detail: T = {} as T
    dataList: T[] = []  as T[]
    page: number = 0
    size: number = 0
    total: number = 0
    loading: boolean = false
    loadingList: boolean = false
    statusList: string = ''
    statusDetail: string = ''
    statusDelete: string = ''
    name: ModalName = ModalName.unknown
    api: BaseApi = new BaseApi(this.name)

    constructor(name: ModalName ) {
        this.name = name
    }

    getList = async (config?: AxiosRequestConfig) => {
        this.loadingList = true
        this.api.getList(config).then((response: AxiosRequestConfig<DataListResponse<T>> )=> {
            if (response?.data?.dataList) {
                this.dataList = response.data.dataList;
                this.total = response.data.total
                this.page  = response.data.page
            }
        }).finally(() => {
            this.loadingList = false;
        })
    }

    getDetail = async (id: string, config?: AxiosRequestConfig) => {
        this.loadingList = true
        this.api.getDetail(id, config).then((response: AxiosRequestConfig<DetailResponse<T>> )=> {
            if (response?.data?.detail) {
                this.detail =  response?.data?.detail
            }
        }).finally(() => {
            this.loadingList = false;
        })
    }

    
    updateDetail = async (id: string, config?: AxiosRequestConfig) => {
        this.loading = true
        this.api.updateDetail(id, config).then((response: AxiosRequestConfig<DetailResponse<T>> )=> {
            if (response?.data?.detail) {
                this.detail =  response?.data?.detail
            }
        }).finally(() => {
            this.loading = false;
        })
    }

    deleteOne = async (id: string, config?: AxiosRequestConfig) => {
        this.loading = true
        this.api.deleteOne(id, config).then((response: AxiosRequestConfig<DetailResponse<T>> )=> {
            if (response?.data?.detail) {
                this.detail =  response?.data?.detail
            }
        }).finally(() => {
            this.loading = false;
        })
    }

    batchDelete = async (config?: AxiosRequestConfig) => {
        this.loadingList = true
        this.api.batchDelete(config).then((response: AxiosRequestConfig<DataListResponse<T>> )=> {
            if (response?.data?.dataList) {
                this.dataList = response?.data?.dataList
            }
        }).finally(() => {
            this.loadingList = false;
        })
    }


    batchUpdate = async (id: string, config?: AxiosRequestConfig) => {
        this.loadingList = true
        this.api.getDetail(id, config).then((response: AxiosRequestConfig<DataListResponse<T>> )=> {
            if (response?.data?.dataList) {
                this.dataList = response?.data?.dataList
            }
        }).finally(() => {
            this.loadingList = false;
        })
    }
}

export default class Storage{
    public static readonly instance = new Storage(); 
    data= {
        primary:  {
            detail: {},
            list: [],
            page: 0,
            size: 0,
            status: '',
            loading: false,
        } 
    } as Record<string, object>

    get(name: string) {
        return this.data[name]
    }

    set<T>(name: string, value: T & object) {
        this.data[name] = value
    }

    remove(name: string) {
        delete this.data[name] 
    }
}