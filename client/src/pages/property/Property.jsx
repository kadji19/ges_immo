import React, { useContext } from 'react';
import { UserContext } from '../../context/UseContext';
import { BiSearch, BiEdit, BiSolidTrash } from 'react-icons/bi'
import "./property.css"
import { Link } from 'react-router-dom'
import NewPosteProperty from '../newPosteProperty/NewPosteProperty';
const Property = () => {
    const { isModalOpen, toggleModal } = useContext(UserContext);

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
                        <tr>
                            <td>
                                <div class="client">
                                
                                    <div class="client-info">
                                        <h4>Seaside Serenity Villa</h4>
                                        <small><span>2 bed</span> & <span>1bath</span></small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                25000Fcfa
                            </td>
                            <td>
                                <span>Seaside Serenity Villa</span>
                            </td>
                            <td>
                                <span>Appartement</span>
                            </td>
                            <td>
                                <div class="actions">
                                <BiEdit className='icon edit'/>
                                <BiSolidTrash className='icon trash'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="client">
                                
                                    <div class="client-info">
                                        <h4>Seaside Serenity Villa</h4>
                                        <small><span>2 bed</span> & <span>1bath</span></small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                25000Fcfa
                            </td>
                            <td>
                                <span>Seaside Serenity Villa</span>
                            </td>
                            <td>
                                <span>Appartement</span>
                            </td>
                            <td>
                                <div class="actions">
                                <BiEdit className='icon edit'/>
                                <BiSolidTrash className='icon trash'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="client">
                                
                                    <div class="client-info">
                                        <h4>Seaside Serenity Villa</h4>
                                        <small><span>2 bed</span> & <span>1bath</span></small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                25000Fcfa
                            </td>
                            <td>
                                <span>Seaside Serenity Villa</span>
                            </td>
                            <td>
                                <span>Appartement</span>
                            </td>
                            <td>
                            <div class="actions">
                                <BiEdit className='icon edit'/>
                                <BiSolidTrash className='icon trash'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="client">
                                
                                    <div class="client-info">
                                        <h4>Seaside Serenity Villa</h4>
                                        <small><span>2 bed</span> & <span>1bath</span></small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                25000Fcfa
                            </td>
                            <td>
                                <span>Seaside Serenity Villa</span>
                            </td>
                            <td>
                                <span>Appartement</span>
                            </td>
                            <td>
                            <div class="actions">
                                <BiEdit className='icon edit'/>
                                <BiSolidTrash className='icon trash'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="client">
                                
                                    <div class="client-info">
                                        <h4>Seaside Serenity Villa</h4>
                                        <small><span>2 bed</span> & <span>1bath</span></small>
                                    </div>
                                </div>
                            </td>
                            <td>
                                25000Fcfa
                            </td>
                            <td>
                                <span>Seaside Serenity Villa</span>
                            </td>
                            <td>
                                <span>Appartement</span>
                            </td>
                            <td>
                            <div class="actions">
                                <BiEdit className='icon edit'/>
                                <BiSolidTrash className='icon trash'/>
                                </div>
                            </td>
                        </tr>
                        
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