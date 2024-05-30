import { createContext, useState } from "react";

export const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    snackbarMessage: "",
    snackbarOpen: false,
    snackbarState: "",
  });

  const updateSnackbar = (obj) => {
    setSnackbar({
      snackbarMessage: obj.snackbarMessage,
      snackbarOpen: obj.snackbarOpen,
      snackbarState: obj.snackbarState,
    });
  };

  return <SnackbarContext.Provider value={{ snackbar, updateSnackbar }}>{children}</SnackbarContext.Provider>;
};

export default SnackbarProvider;
