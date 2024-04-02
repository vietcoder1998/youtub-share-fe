import { AuthenticateApi } from "../api/authenticate.api";
import { CookieVariable, ModelName } from "../config/constants";
import { UserInfo } from '../types/common';
import { RegisterData } from "../types/register";
import CookieHelper from "./cookie.helper";

export default class AuthenticateHelper {
    userInfo: UserInfo = {
        id: '',
        token: '',
        email: '',
        username: '',
    }

    token = ''
    cookieHelper = new CookieHelper()
    authenticateApi = new AuthenticateApi(ModelName.authenticate)
    static readonly instance = new AuthenticateHelper()

    async handleLogin(email: string, password: string): Promise<UserInfo | undefined> {
        return await this.authenticateApi.login(email, password).then((userInfo) => {
            if (userInfo) {
                this.cookieHelper.setCookiesAsString<UserInfo>(CookieVariable.userInfo,  { id: userInfo.id, username: userInfo.username, email: userInfo.email})
                this.cookieHelper.setCookie(CookieVariable.userToken, userInfo?.token ?? '')
                this.cookieHelper.setCookie(CookieVariable.userId, userInfo?.id)
            }
            return userInfo
        })

    }

    async handleRegister(email: string, password: string): Promise<RegisterData> {
        const response = await this.authenticateApi.register(email, password)
        
        return response
    }

    getUserInfo(): UserInfo {
        const userInfo = this.cookieHelper.getCookieAsJSON<UserInfo>(CookieVariable.userInfo)

        return userInfo
    }

    getToken() {
        const token = this.cookieHelper.getCookie(CookieVariable.userToken)

        return token
    }

    isLogin() {
        return Boolean(this.getToken())
    }

    onLogOut() {
        this.authenticateApi.logOut().then((response) => {
            if (response) {
                this.cookieHelper.deleteCookie(CookieVariable.userToken)
                this.cookieHelper.deleteCookie(CookieVariable.userId)
                this.cookieHelper.deleteCookie(CookieVariable.userInfo)

                window.location.reload()
            }
        })
    }

}