// src/context/ToastContext.tsx
import React, { ReactNode, createContext, useContext } from 'react';
import { ToastContainer, toast as showToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastContextProps {
  success: (message: string) => void;
  error: (message: string) => void;
}

const ToastContext = createContext<ToastContextProps>({
  success: () => {},
  error: () => {},
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const success = (message: string) => showToast.success(message);
  const error = (message: string) => showToast.error(message);

  return (
    <ToastContext.Provider value={{ success, error }}>
      <ToastContainer autoClose={3000} position="top-right" />
      {children}
    </ToastContext.Provider>
  );
};
