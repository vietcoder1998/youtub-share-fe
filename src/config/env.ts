
// eslint-disable-file no-use-before-define 
const VITE_BASE_API =  typeof process !=='undefined' ? process.env.VITE_BASE_API: undefined
const VITE_BASE_URL = typeof process !== 'undefined' ?process.env.VITE_BASE_URL: undefined
const VITE_WS = typeof process !== 'undefined' ?process.env.VITE_WS: undefined

export {
    VITE_BASE_API,
    VITE_BASE_URL,
    VITE_WS
}