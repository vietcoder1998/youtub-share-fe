export enum LocalStorageName {
    authenticate = 'YoutubeShareAuthenticate',
    userInfo = 'YoutubeShareUserInfoProvider',
    i18n = 'YoutubeShareI18nProvider',
}

export default class LocalStorageHelper {
    get localStorage() { return typeof window?.localStorage !== 'undefined' ? localStorage : { getItem: (name: string) => { return name }, setItem: (name: string) => { return name}, removeItem: (name: string) => {
         return name
    }}}

    public static readonly instance  = new LocalStorageHelper()

    getLocalStorage(name: LocalStorageName) {
        return this.localStorage.getItem(name)
    }

    setLocalStorageAsString<T>(name: LocalStorageName, value: T,) {
        return this.localStorage.setItem(name, JSON.stringify(value))
    }

    getLocalStorageAsJSON<T>(name: LocalStorageName) {
        return JSON.parse(this.localStorage.getItem(name) ?? '') as T
    }

    deleteLocalStorage(name: LocalStorageName) {
        return this.localStorage.removeItem(name)
    }
}