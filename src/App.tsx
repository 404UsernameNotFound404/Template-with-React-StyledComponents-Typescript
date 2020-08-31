import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./packages/login-page-react";
import { AppContext } from "./AppContext";
import {
  MessageToUser,
  MessageToUserProps,
} from "./packages/message-to-user-react/src/MessageToUser";

export const MobileBreakPoint = 700;
export const DesktopWidth = "65rem";

const AppStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primaryBackground};
`;

export const AppTheme = {
  colors: {
    primaryText: "#000",
    primaryBackground: "#ffffff",
    // primaryText: "#fff",
    // primaryBackground: "#000",
    success: "green",
    error: "red",
  },
  screenSizes: {
    mobile: `(max-width: ${MobileBreakPoint}px)`,
  },
  desktopWidth: DesktopWidth,
};

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messageToUser, setMessageToUser] = useState<MessageToUserProps>({
    message: "starting message",
    variant: "success",
  });

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider theme={AppTheme}>
      <AppStyle>
        <AppContext.Provider
          value={{
            isLoggedIn: isLoggedIn,
            isLoading: isLoading,
            setMessageToUser: setMessageToUser,
            login: login,
            logout: logout,
          }}
        >
          <Router>
            <Switch>
              <Route path="/login" component={LoginPage} />
            </Switch>
          </Router>
          <MessageToUser {...messageToUser} />
        </AppContext.Provider>
      </AppStyle>
    </ThemeProvider>
  );
};
