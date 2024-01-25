import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';

interface User {
  id: string;
  fullName: string;
  email: string;
  profileImage: string | null;
}

interface UserContextType {
  user: User | null;
  updateUser: (userData: User | null) => void;
  isLoggedIn: () => boolean;
  logout: () => void;
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
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const updateUser = (userData: User | null) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('user');
    }
  };

  const isLoggedIn = () => {
    return user !== null;
  };

  const logout = () => {
    updateUser(null); // Define o estado do usuário como nulo
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('user');
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser, isLoggedIn, logout }}>
      {children}
    </UserContext.Provider>
  );
};
