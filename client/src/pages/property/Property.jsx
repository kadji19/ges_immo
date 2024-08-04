import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UseContext';
import { BiSearch, BiEdit, BiSolidTrash } from 'react-icons/bi'
import "./property.css"
import NewPosteProperty from '../newPosteProperty/NewPosteProperty';
import axios from 'axios';
const Property = () => {
    const { isModalOpen, toggleModal, userId  } = useContext(UserContext);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            console.log(userId)
            try {
                const response = await axios.get(`http://localhost:5000/api/properties/owner/${userId}`);
                setProperties(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProperties();
    }, [userId]);

  return (
    <div className="main--content">
        <div className="property_container">
        <div className="property_header">
            <h3>Vos propriétés</h3>
            <div className="search-box">
                <input type="text" placeholder='Search anything here...' />
                <BiSearch className='icon'/>
            </div>
            <button className="sendButton" onClick={toggleModal}> Ajouter une nouvelle propriété </button>
{/*             <button className="sendButton"><Link className='nav_link_dash' to='newposteproperty' > Ajouter une nouvelle propriété </Link></button> */}
        </div>
        <hr class="centered-hr"/>
        <div className="property_content">
            <div class="records table-responsive">
                <br />
            <div>
                <table width="100%">
                    <thead>
                        <tr>
                            <th><span class="las la-sort"></span> Titre</th>
                            <th><span class="las la-sort"></span> Prix</th>
                            <th><span class="las la-sort"></span> Adresse</th>
                            <th><span class="las la-sort"></span> Type de propriété</th>
                            <th><span class="las la-sort"></span> ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                    {properties.map((propertie) => (
                        <tr>
                        <td key={propertie.id_propriete}>
                            <div class="client">
                            
                                <div class="client-info">
                                    <h4>{propertie.titre}</h4>
                                    <small><span>{propertie.nbr_chambre} pièce</span> & <span>{propertie.nbr_toilette} salle de bain</span></small>
                                </div>
                            </div>
                        </td>
                        <td>
                        {propertie.prix}{propertie.type_offre === 'Louer' ? '/mois' : ''}
                        </td>
                        <td>
                            <span>{propertie.adresse}</span>
                        </td>
                        <td>
                            <span>{propertie.libelle}</span>
                        </td>
                        <td>
                            <div class="actions">
                            <BiEdit className='icon edit'/>
                            <BiSolidTrash className='icon trash'/>
                            </div>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            </div>
        </div>
        {isModalOpen && <NewPosteProperty/> }
        </div>
    </div>
  )
}

export default Property