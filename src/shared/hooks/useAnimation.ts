import { useEffect, useState } from "react";

export const useAnimation = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsActive(true);
      }, 0);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return isActive;
  }