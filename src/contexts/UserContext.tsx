// src/context/UserContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  id: string;
  fullName: string;
  email: string;
  // Adicione outras propriedades conforme necessário
}

interface UserContextType {
  user: User | null;
  updateUser: (userData: User | null) => void;
  isLoggedIn: () => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const updateUser = (userData: User | null) => {
    setUser(userData);
  };

  const isLoggedIn = () => {
    return user !== null;
  };

  return (
    <UserContext.Provider value={{ user, updateUser, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
