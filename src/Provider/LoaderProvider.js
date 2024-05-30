import { createContext, useState } from "react";

export const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const updateLoading = (bool) => {
    setIsLoading(bool);
  };

  return <LoaderContext.Provider value={{ isLoading, updateLoading }}>{children}</LoaderContext.Provider>;
};

export default LoaderProvider;
