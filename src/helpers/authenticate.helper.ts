import { AuthenticateApi } from "../api/authenticate.api";
import { CookieVariable, ModelName } from "../config/constants";
import { UserInfo } from "../types/common";
import { RegisterData } from "../types/register";
import CookieHelper from "./cookie.helper";

export default class AuthenticateHelper {
    userInfo: UserInfo = {
        id: '',
        token: '',
        email: '',
    }

    cookieHelper = new CookieHelper()
    token = ''
    authenticateApi = new AuthenticateApi(ModelName.authenticate)
    static readonly instance = new AuthenticateHelper()

    async handleLogin(email: string, password: string): Promise<UserInfo | undefined> {
        const userInfo = await this.authenticateApi.login(email, password)
        
        if (userInfo?.token) {
            this.cookieHelper.setCookiesAsString<UserInfo>(CookieVariable.userInfo,  userInfo)
            this.cookieHelper.setCookie(CookieVariable.userInfo, userInfo?.token)
            this.cookieHelper.setCookie(CookieVariable.userId, userInfo?.id)
            this.token = userInfo.token
            this.userInfo = userInfo
        }

        return userInfo
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
        this.cookieHelper.deleteCookie(CookieVariable.userToken)
        this.cookieHelper.deleteCookie(CookieVariable.userToken)

        this.authenticateApi.logOut(this.userInfo.id)
    }

}