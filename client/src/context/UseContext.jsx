import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nom, setNom] = useState("");
  const [userId, setUserId] = useState("");
/*   const [properties, setProperties] = useState([]); */

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setNom(decodedToken.nom);
      setUserId(decodedToken.userId);
    }
  }, []);

  return (
    <UserContext.Provider value={{ isModalOpen, toggleModal, nom, userId }}>
      {children}
    </UserContext.Provider>
  );
};
