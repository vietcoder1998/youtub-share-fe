import React from "react";
import { DefaultLayoutType } from "../types/common";
import AuthenticateHelper from "../helpers/authenticate.helper";

export const DefaultContextValue: DefaultLayoutType.AppContextType = {
  header: {
    isLogin: false,
    user: {
      gmail: "",
      token: "",
    },
  },
  pageState: {
    scroll: {
      x: 0,
      y: 0,
    },
  },
  onLogout: AuthenticateHelper.instance.onLogOut,
  isLogin: AuthenticateHelper.instance.isLogin,
};
export const AppContext =
  React.createContext<DefaultLayoutType.AppContextType>(DefaultContextValue);
