import { createContext, useMemo, useState } from 'react';

export const UserContext = createContext({});

export function UserStorage({ children }) {
  const [loggedUser, setLoggedUser] = useState({});
  const value = useMemo(
    () => ({
      loggedUser,
      setLoggedUser,
    }),
    [loggedUser]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
