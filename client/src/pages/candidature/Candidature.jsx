import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';
import './candidature.css';
import { UserContext } from '../../context/UseContext';

const Candidature = () => {
  const { userId } = useContext(UserContext);
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        if (userId) {
          const response = await axios.get(`http://localhost:5000/api/candidats/owner/${userId}/candidates`);
          setCandidates(response.data);
        }
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, [userId]);

  const filteredCandidates = candidates.filter(candidate => 
    candidate.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidate.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main--content">
      <div className="property_container">
        <div className="property_header">
          <h3>Liste des candidats</h3>
          <div className="search-box">
            <input 
              type="text" 
              placeholder='Search anything here...' 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BiSearch className='icon'/>
          </div>
        </div>
        <hr className="centered-hr"/>
        <div className="property_content">
          <div className="records table-responsive">
            <br />
            <div>
              <table width="100%">
                <thead>
                  <tr>
                    <th>Candidat</th>
                    <th>Propriété</th>
                    <th>Contact</th>
                    <th>Situation</th>
                    <th>Message</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCandidates.map(candidate => (
                    <tr key={candidate.id}>
                      <td>
                        <div className="client">
                          <div className="client-info">
                            <h4>{candidate.nom} {candidate.prenom}</h4>
                            <small>{candidate.contact}</small>
                          </div>
                        </div>
                      </td>
                      <td><div className="client">
                          <div className="client-info">
                            <h4>{candidate.titre}</h4>
                            <small>{candidate.adresse}</small>
                          </div>
                        </div>
                      </td>
                      <td>{candidate.contact}</td>
                      <td>{candidate.situation}</td>
                      <td>{candidate.message}</td>
                      <td>
                        <div className="actions">
                          <button className="btn_connex">Valider</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidature;
