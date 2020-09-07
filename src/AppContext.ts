import { createContext } from "react";
import { MessageToUserProps } from "./packages/message-to-user-react";

export const AppContext = createContext({
  isLoggedIn: false,
  isLoading: false,
  setIsLoading: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
  setMessageToUser: (() => {}) as React.Dispatch<
    React.SetStateAction<MessageToUserProps>
  >,
  login: (email, password) => {},
  logout: () => {},
});
