import axios, { AxiosRequestConfig } from "axios";
import { ModelName } from "../config/constants";


class BaseApi {
    instance =  axios.create({
        headers: {
            token: ''
        },
        baseURL: process.env.REACT_BASE_URL
    }) 
    name: ModelName | string = ''

    constructor(name?: ModelName) {
        if (name) {
            this.name  = name
        }
    }

    getList = async (config?: AxiosRequestConfig) =>{
        return this.instance.get(`/${this.name}`, config)
    }

    getDetail = async (id: string, config?: AxiosRequestConfig) => {
        return this.instance.get(`/${this.name}/${id}`, config)
    }


    updateDetail = async (id: string, config?: AxiosRequestConfig) => {
        return this.instance.post(`/${this.name}/${id}`, config)
    }

    create = async (config?: AxiosRequestConfig) => {
        return this.instance.put(`/${this.name}`, config)
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