
// eslint-disable-file no-use-before-define 
export const VITE_BASE_API =  typeof process !=='undefined' ? process.env.VITE_BASE_API: undefined
export const VITE_BASE_URL = typeof process !== 'undefined' ?process.env.VITE_BASE_URL: undefined
export const VITE_WS = typeof process !== 'undefined' ?process.env.VITE_WS: undefined