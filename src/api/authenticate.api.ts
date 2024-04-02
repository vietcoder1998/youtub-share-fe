import { DetailResponse, UserInfo } from '../types/common.d';
import { RegisterData } from '../types/register';
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

    async logOut(): Promise<UserInfo | undefined> { 
        const response = await this.instance.delete<DetailResponse<UserInfo>>(`/${this.name}/logout`)
    
        if (!response) {
            throw new Error("Could not find user")
        }

        return response.data.detail
    }
    

    async register(email: string, password: string): Promise<RegisterData> { 
        const response = await this.instance.put<DetailResponse<RegisterData>>(`/${this.name}/register`, { email, password } )
    
        if (!response) {
            throw new Error("Could not register user")
        }

        return response.data.detail
    }

}