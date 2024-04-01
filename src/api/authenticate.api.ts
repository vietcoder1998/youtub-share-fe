import { DetailResponse, UserInfo } from '../types/common.d';
import { ModelName } from './../config/constants';
import BaseApi from './base.api';

export class AuthenticateApi extends BaseApi {
    name = ModelName.authenticate

    constructor(name?: ModelName) {
        super(name);
        if (name) {
            this.name = name;
        }
    }

    async login(email: string, password: string): Promise<UserInfo | undefined> { 
        const response = await this.instance.post<DetailResponse<UserInfo>>(`/${this.name}/login`, { email: email, password: password })
    
        if (!response) {
            throw new Error("Could not find user")
        }

        return response.data.detail
    }

    async logOut(id: string): Promise<UserInfo | undefined> { 
        const response = await this.instance.delete<DetailResponse<UserInfo>>(`/${this.name}/logout/${id}`, )
    
        if (!response) {
            throw new Error("Could not find user")
        }

        return response.data.detail
    }
    

    async register(id: string): Promise<UserInfo | undefined> { 
        const response = await this.instance.put<DetailResponse<Register>>(`/${this.name}/register/${id}`, )
    
        if (!response) {
            throw new Error("Could not register user")
        }

        return response.data.detail
    }

}