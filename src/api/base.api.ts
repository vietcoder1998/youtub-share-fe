import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { CookieVariable, ModelName } from "../config/constants";
import CookieHelper from "../helpers/cookie.helper";
import { QueryList } from "../types/common";


class BaseApi {
    public instance =  axios.create({
        headers: {
            token: `Bearer ${new CookieHelper().getCookie(CookieVariable.userToken)}`,
            'Funny-Movie-User-Id': new CookieHelper().getCookie(CookieVariable.userId)
        },
        baseURL: typeof process !== 'undefined' ? process.env.REACT_APP_BASE_API : 'http://localhost:3030/api/v1',
    }) 
    name: ModelName | string = ''

    constructor(name?: ModelName) {
        if (name) {
            this.name  = name
        }
    }

    getList = async <R>(config?: AxiosRequestConfig) =>{
        return this.instance.get<QueryList, AxiosResponse<R>>(`/${this.name}`, config)
    }

    getDetail = async (id: string, config?: AxiosRequestConfig) => {
        return this.instance.get(`/${this.name}/${id}`, config)
    }


    updateDetail = async (id: string, config?: AxiosRequestConfig) => {
        return this.instance.post(`/${this.name}/${id}`, config)
    }

    create = async <T>(body?: T, config?: AxiosRequestConfig) => {
        return this.instance.put(`/${this.name}`, body, config)
    }

    deleteOne = async (id: string, config?: AxiosRequestConfig) => {
        return this.instance.delete(`/${this.name}/${id}`, config)
    }

    batchDelete = async ( config?: AxiosRequestConfig) => {
        return this.instance.delete(`/${this.name}`, config)
    }

    batchUpdate = async ( config?: AxiosRequestConfig) => {
        return this.instance.delete(`/${this.name}`, config)
    }
}

export default BaseApi