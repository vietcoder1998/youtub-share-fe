import Cookies, { CookieGetOptions, CookieSetOptions } from "universal-cookie"

export enum CookieName {
    authenticate = 'YoutubeShareAuthenticate',
    userInfo = 'YoutubeShareUserInfoProvider',
}

export default class CookieHelper {
    cookies: Cookies = new Cookies()

    getCookie(name: CookieName, options?: CookieGetOptions) {
        return this.cookies.get(name, options)
    }

    setCookiesAsString<T>(name: CookieName, value: T, options?: CookieSetOptions) {
        return this.cookies.set(name, JSON.stringify(value), options)
    }

    getCookieAsJSON<T>(name: CookieName, options?: CookieGetOptions) {
        return JSON.parse(this.cookies.get(name, options)) as T
    }

    deleteCookie(name: CookieName, options?: CookieSetOptions) {
        return this.cookies.remove(name, options)
    }
}