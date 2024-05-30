import { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const updateUserData = (bool) => {
    setUserData(bool);
  };

  return <UserDataContext.Provider value={{ userData, updateUserData }}>{children}</UserDataContext.Provider>;
};

export default UserDataProvider;
