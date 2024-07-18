import React, { useEffect, useState } from 'react'
import './vendre.css'
import { BiMap, BiBed, BiBath } from "react-icons/bi";
import axios from 'axios';

const Vendre = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/properties/get');
                // Parse images from string to array
                const propertiesWithParsedImages = response.data.map(property => ({
                    ...property,
                    images: JSON.parse(property.images)
                }));
                setProperties(propertiesWithParsedImages);
            } catch (error) {
                console.error("Erreur lors de la récupération des propriétés!", error);
            }
        };
        fetchProperties();
    }, []);

  return (
    <div className='vendre'>
        <section className='banner_vendre'>
            <div className="banner_text_title">
                <strong> Propriété à vendre</strong>
                <span>Trouve la maison de tes rêves</span>
            </div>
        </section>
        <section className='search'>
                <div className='search_box'>
                    <form className='search_form'>
                        <div className="search_form_controle">
                            <label htmlFor="">Ville</label>
                            <select className="search_form_controle_select" name="" id="">
                                <option value="">choisir une ville</option>
                            </select>
                        </div>
                        <div className="search_form_controle">
                            <label htmlFor="">Type de propriétée</label>
                            <select className="search_form_controle_select" name="" id="">
                                <option value="">choisir une type de propriétée</option>
                            </select>
                        </div>
                        <div className="search_form_controle">
                            <label htmlFor="">Type de transaction</label>
                            <select className="search_form_controle_select" name="" id="">
                                <option value="">choisir un type de transaction</option>
                            </select>
                        </div>
                        <button className='search_form_btn'>Recherche</button>
                    </form>
                </div>
        </section>
        <section className='home_container_propreties'>
            {properties.map((propertie)=>(
                <div key={propertie.id_propriete} class="home_propreties_card">
                <div class="propreties_card_image">
                    <img src={propertie.images[ 0]} alt=""/>
                </div>
                <div className="propreties_card_text">
                            <div className='propreties_card_text_des'>
                                <span>{propertie.titre} </span>
                                <div className="propreties_card_text_address">
                                <BiMap color='#0fb45f' className='icon_prperty'/>
                                    <span className="address">{propertie.adresse} </span>
                                </div>
                            </div>
                            <div className="propreties_card_text_nbrroom">
                                <div className="card_text_nbrroom_bb">
                                <BiBed color='#5B5B5B' className='icon_prperty'/>
                                    <span>{propertie.nbr_chambre}-Pièce</span>
                                </div>
                                <div className="card_text_nbrroom_bb">
                                <BiBath color='#5B5B5B' className='icon_prperty'/>
                                    <span>{propertie.nbr_toilette}-salle de bain</span>
                                </div>
                            </div>
                            <div className="propreties_card_text_pd">
                                <div className="card_text_pd_price">
                                    <span>Prix</span>
                                    <span className="text_price">{propertie.prix}{propertie.type_offre === 'Louer' ? '/mois' : ''}</span>
                                </div>
                                <button className='search_form_btn'>details</button>
                            </div>
                        </div>
            </div>
            ))}
        </section>
    </div>
  )
}

export default Vendre