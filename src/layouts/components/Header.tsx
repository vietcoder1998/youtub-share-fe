import React from "react"
import { AppContext } from "../../contexts/AppContext"
import { DefaultHeader } from "./headers/DefaultHeader"
import LoginHeader from "./headers/LoginHeader"

export const Header: React.FC = () => {
    const data = React.useContext(AppContext)


    if (data.isLogin) {
        return <DefaultHeader />
    } 

    return <LoginHeader />
}