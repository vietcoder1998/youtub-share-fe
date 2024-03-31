import Cookies, { CookieGetOptions, CookieSetOptions } from "universal-cookie"
import { CookieVariable } from "../config/constants"
export default class CookieHelper {
    cookies: Cookies = new Cookies()

    getCookie(name: CookieVariable, options?: CookieGetOptions) {
        return this.cookies.get(name, options)
    }

    setCookiesAsString<T>(name: CookieVariable, value: T, options?: CookieSetOptions) {
        return this.cookies.set(name, JSON.stringify(value), options)
    }

    setCookie(name: CookieVariable, value: string, options?: CookieSetOptions) {
        return this.cookies.set(name, value, options)
    }

    getCookieAsJSON<T>(name: CookieVariable, options?: CookieGetOptions) {
        return JSON.parse(this.cookies.get(name, options)) as T
    }

    deleteCookie(name: CookieVariable, options?: CookieSetOptions) {
        return this.cookies.remove(name, options)
    }
}