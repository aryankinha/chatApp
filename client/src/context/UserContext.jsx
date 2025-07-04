import React , { createContext ,useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState({
      id: "f955e6c3-1efd-4759-a273-212877bfa39a",
      name: "Ananya Singh",
      email: "ananya.singh@example.com"
  });
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider