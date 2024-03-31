import { AuthenticateApi } from "../api/authenticate.api";
import { CookieVariable } from "../config/constants";
import { CommonType } from '../types/common';
import CookieHelper from "./cookie.helper";

export default class AuthenticateHelper {
    userInfo: CommonType.UserInfo = {
        id: '',
        token: '',
        gmail: '',
    }

    cookieHelper = new CookieHelper()
    token = ''
    authenticateApi = new AuthenticateApi()
    static readonly instance = new AuthenticateHelper()

    async onSyncUserInfo(email: string, password: string) {
        const userInfo = await this.authenticateApi.login(email, password)
        
        if (userInfo?.token) {
            this.cookieHelper.setCookiesAsString(CookieVariable.userInfo,  userInfo as Object)
            this.cookieHelper.setCookie(CookieVariable.userInfo, userInfo?.token)
            this.token = userInfo.token
            this.userInfo = userInfo
        }

    }

    getUserInfo(): CommonType.UserInfo {
        const userInfo = this.cookieHelper.getCookieAsJSON<CommonType.UserInfo>(CookieVariable.userInfo)

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