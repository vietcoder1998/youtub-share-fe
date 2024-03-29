import axios, { AxiosRequestConfig } from "axios";
import { ModalName } from "../config/constants";

const instance =  axios.create({
    headers: {
        token: ''
    },
    baseURL: process.env.REACT_BASE_URL
})

class BaseApi {
    instance = instance 
    name = ''

    constructor(name?: ModalName) {

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