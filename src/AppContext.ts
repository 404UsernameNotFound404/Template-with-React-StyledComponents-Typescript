import { createContext } from "react";
import { MessageToUserProps } from "./packages/message-to-user-react";

export const AppContext = createContext({
  isLoggedIn: false,
  isLoading: false,
  setMessageToUser: (() => {}) as React.Dispatch<
    React.SetStateAction<MessageToUserProps>
  >,
  login: () => {},
  logout: () => {},
});
