/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const EstateCardContext = createContext();

export const EstateCardProvider = ({ children }) => {
  const [estateData, setEstateData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../public/card.json");
        const jsonData = await response.json();
        setEstateData(jsonData.estates);
      } catch (error) {
        console.error("Error fetching estate data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <EstateCardContext.Provider value={estateData}>
      {children}
    </EstateCardContext.Provider>
  );
};
