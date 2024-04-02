import React from "react";
import { Socket } from "socket.io-client";
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
  socket: {
    on: (name, callback) => {
      callback(name)
    }
  } as Socket,
};
export const AppContext =
  React.createContext<AppContextType>(DefaultContextValue);
