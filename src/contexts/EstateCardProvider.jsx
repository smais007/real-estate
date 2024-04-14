/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const EstateCardContext = createContext();

export const EstateCardProvider = ({ children }) => {
  const [estateData, setEstateData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedEstateId, setSelectedEstateId] = useState(null);
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

  const selectEstate = (id) => {
    setSelectedEstateId(id);
  };

  return (
    <EstateCardContext.Provider value={{ estates: estateData, selectEstate, selectedEstateId }}>
      {children}
    </EstateCardContext.Provider>
  );
};
