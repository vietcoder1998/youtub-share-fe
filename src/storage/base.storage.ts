import { AxiosRequestConfig } from 'axios';
import BaseApi from "../api/base.api";
import { ModelName } from "../config/constants";
import { DataListResponse, DetailResponse } from './../types/common.d';


export class StorageItem<T>{
    detail: T = {} as T
    dataList: T[] = []
    page: number = 0
    size: number = 0
    total: number = 0
    loading: boolean = false
    loadingList: boolean = false
    statusList: string = ''
    statusDetail: string = ''
    statusDelete: string = ''
    name: ModelName = ModelName.unknown
    api: BaseApi = new BaseApi(this.name)

    constructor(name: ModelName ) {
        this.name = name
    }

    getList = async (config?: AxiosRequestConfig) => {
        this.loadingList = true
        this.api.getList<DataListResponse<T>>(config).then((response)=> {
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