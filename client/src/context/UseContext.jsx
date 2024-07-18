import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [proprietaireId, setProprietaireId] = useState("");
/*   const [properties, setProperties] = useState([]); */

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

/*   const fetchProperties = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/properties/user/${userId}`);
      setProperties(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des propriétés!", error);
    }
  }; */
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setNom(decodedToken.nom);
      setProprietaireId(decodedToken.userId);
    }
  }, []);

  return (
    <UserContext.Provider value={{ isModalOpen, toggleModal, nom, proprietaireId }}>
      {children}
    </UserContext.Provider>
  );
};
