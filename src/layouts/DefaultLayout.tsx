import { Container, CssBaseline, Divider } from "@mui/material";
import React from "react";
import { io } from "socket.io-client";
import { AppContext } from "../contexts/AppContext";
import AuthenticateHelper from "../helpers/authenticate.helper";
import { HeaderProps } from "../types/common.d";
import { Header } from "./components/Header";

const socket = io("ws://localhost:3001");

export const DefaultLayout: React.FC<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  const [header, setHeader] = React.useState<HeaderProps>({
    isLogin: false,
    user: {
      email: "",
      id: "",
      username: "",
    },
  });
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  React.useEffect(() => {
    socket.on("connection", () => {
      console.log("Connection established");
    });

    const userInfo = AuthenticateHelper.instance.getUserInfo();
    const isUserLogin = Boolean(userInfo.id);

    setIsLogin(isUserLogin);
    setHeader({
      ...header,
      isLogin: isUserLogin,
      user: userInfo,
    } as HeaderProps);

    console.log("userInfo", AuthenticateHelper.instance.getUserInfo());
    return () => {
      socket.off("connection", () => {
        console.log("Connection closed");
      });
    };
  }, []);

  const defaultContext = React.useMemo(() => {
    return {
      header,
      isLogin,
      onLogout: () => AuthenticateHelper.instance.onLogOut(),
    };
  }, [header, isLogin, AuthenticateHelper.instance.onLogOut]);
  return (
    <AppContext.Provider value={defaultContext}>
      <Header />
      <Divider />
      <CssBaseline />
      <Container className="bg-whitesmoke">{props.children}</Container>
    </AppContext.Provider>
  );
};
