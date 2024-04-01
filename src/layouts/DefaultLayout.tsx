import { Container, CssBaseline, Divider } from "@mui/material";
import React from "react";
import { io } from "socket.io-client";
import { AppContext, DefaultContextValue } from "../contexts/AppContext";
import { Header } from "./components/Header";

const socket = io("ws://localhost:3001");

export const DefaultLayout: React.FC<{ children: JSX.Element }> = (props: {
  children: JSX.Element;
}) => {
  React.useEffect(() => {
    socket.on("connection", () => {
      console.log("Connection established");
    });
  }, []);
  return (
    <AppContext.Provider value={DefaultContextValue}>
      <Header />
      <Divider />
      <CssBaseline />
      <Container className="bg-whitesmoke">{props.children}</Container>
    </AppContext.Provider>
  );
};
