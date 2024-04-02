import React from "react";
import AuthenticateHelper from "../helpers/authenticate.helper";
import { AppContextType } from "../types/common";

export const DefaultContextValue: AppContextType = {
  header: {
    isLogin: false,
    user: {
      email: "",
      token: "",
      id: "",
      username: "",
    },
  },
  pageState: {
    scroll: {
      x: 0,
      y: 0,
    },
  },
  onLogout: AuthenticateHelper.instance.onLogOut,
  isLogin: false,
};
export const AppContext =
  React.createContext<AppContextType>(DefaultContextValue);
