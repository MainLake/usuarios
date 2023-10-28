import { useContext, useState, createContext } from "react";

const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
        {children}
    </UsersContext.Provider>
  )
};

const useUsersContext = () => useContext(UsersContext);

export { UsersContextProvider, useUsersContext };