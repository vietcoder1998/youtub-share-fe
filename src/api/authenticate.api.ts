import { ModelName } from './../config/constants';
import BaseApi from './base.api';
import { CommonType, DetailResponse } from '../types/common.d';

export class AuthenticateApi extends BaseApi {
    name = ModelName.user

    async login(email: string, password: string): Promise<CommonType.UserInfo | undefined> { 
        const response = await this.instance.post<DetailResponse<CommonType.UserInfo>>('/login', { email: email, password: password })
    
        if (!response) {
            throw new Error("Could not find user")
        }

        return response.data.detail
    }

    async logOut(id: string): Promise<CommonType.UserInfo | undefined> { 
        const response = await this.instance.delete<DetailResponse<CommonType.UserInfo>>(`/logout/${id}`, )
    
        if (!response) {
            throw new Error("Could not find user")
        }

        return response.data.detail
    }
    

}