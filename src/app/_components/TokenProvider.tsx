"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
  createContext,
} from "react";

type TokenContextType = {
  set: (val: string | undefined) => void;
  value?: string;
};

const TokenContext = createContext<TokenContextType>({
  set: (val) => {},
  value: undefined,
});

export const useAccessToken = () => useContext(TokenContext);
export function AccessTokenProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | undefined>();
  return (
    <TokenContext.Provider value={{ value: token, set: (value) => setToken(value) }}>
      {children}
    </TokenContext.Provider>
  );
}
