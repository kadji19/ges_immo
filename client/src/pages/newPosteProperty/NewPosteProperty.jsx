import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UseContext';
import './newPosteProperty.css';
import UploadWidget from '../../components/uploadWidget/UploadWidget';

const NewPosteProperty = () => {
    const { toggleModal, userId  } = useContext(UserContext);
    const [images, setImages] = useState([]);
    const [ville, setVille] = useState([]); 
    const [types, setTypes] = useState([]);

    const [formData, setFormData] = useState({
        titre: "",
        prix: "",
        adresse: "",
        description: "",
        nbr_chambre: "",
        nbr_toilette: "",
        type_offre: "",
        statut: "",
        depot_garantie: "",
        images: [],
        id_cat_prop: "",
        id_ville: "",
        proprietaire_id: userId ,
    });

    // Fonction pour obtenir les villes depuis le backend
    useEffect(() => {
        const fetchVilles = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/properties/villes");
                setVille(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des villes!", error);
            }
        };
        fetchVilles();
    }, []);

    useEffect(() => {
        const fetchTypes = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/properties/types");
                setTypes(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des types de propriété!", error);
            }
        };
        fetchTypes();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

/*     const handleImages = (urls) => {
        setImages(urls);
        setFormData((prev) => ({
            ...prev,
            images: urls,
        }));
    };
 */

    const handleSubmit = async (e) => {
        console.log(formData)
        console.log(images)
        e.preventDefault();

        // Mettre à jour formData avec les images téléchargées
        const updatedFormData = {
            ...formData,
            images: images,
        };
        try {
            await axios.post("http://localhost:5000/api/properties/add", updatedFormData);
            alert("Propriété ajoutée avec succès");
        } catch (error) {
            console.error("Erreur lors de l'ajout de la propriété!", error);
        }
    };

    return (
        <div className="modal">
            <div className="newPostPage">
                <div className="formContainer">
                    <div className="header_newPostPage">
                        <h3>Ajouter une nouvelle propriété</h3>
                        <span className="close" onClick={toggleModal}>&times;</span>
                    </div>
                    <div className="wrapper">
                        <form onSubmit={handleSubmit}>
                            <div className="item">
                                <label htmlFor="titre">Titre</label>
                                <input id="titre" name="titre" type="text" placeholder="Entrer le titre de la propriété" onChange={handleChange} value={formData.titre} />
                            </div>
                            <div className="item">
                                <label htmlFor="prix">Prix</label>
                                <input id="prix" name="prix" type="number" placeholder="Entrer le prix de la propriété" onChange={handleChange} value={formData.prix} />
                            </div>
                            <div className="item">
                                <label htmlFor="adresse">Adresse</label>
                                <input id="adresse" name="adresse" type="text" placeholder="Entrer l'adresse de la propriété" onChange={handleChange} value={formData.adresse} />
                            </div>
                            <div className="item description">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" name="description" className="descrip" placeholder="Entrer la description de la propriété" onChange={handleChange} value={formData.description}></textarea>
                            </div>
                            <div className="item">
                                <label htmlFor="id_ville">Ville</label>
                                <select id="id_ville" name="id_ville" onChange={handleChange} value={formData.id_ville}>
                                    <option value="">Sélectionnez une ville</option>
                                    {ville.map((ville) => (
                                        <option key={ville.id_ville} value={ville.id_ville}>
                                            {ville.nom_ville}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="item">
                                <label htmlFor="nbr_chambre">Nombre de chambres</label>
                                <input min={1} id="nbr_chambre" name="nbr_chambre" type="number" onChange={handleChange} value={formData.nbr_chambre} />
                            </div>
                            <div className="item">
                                <label htmlFor="nbr_toilette">Nombre de salles de bain</label>
                                <input min={1} id="nbr_toilette" name="nbr_toilette" type="number" onChange={handleChange} value={formData.nbr_toilette} />
                            </div>
                            <div className="item">
                                <label htmlFor="type_offre">Type</label>
                                <select id="type_offre" name="type_offre" onChange={handleChange} value={formData.type_offre}>
                                    <option value="">Sélectionnez un type</option>
                                    <option value="Louer">À louer</option>
                                    <option value="Vendre">À vendre</option>
                                </select>
                            </div>
                            <div className="item">
                                <label htmlFor="id_cat_prop">Type de propriété</label>
                                <select id="id_cat_prop" name="id_cat_prop" onChange={handleChange} value={formData.id_cat_prop}>
                                    <option value="">Sélectionnez un type de propriété</option>
                                    {types.map((type) => (
                                            <option key={type.id_cat_prop} value={type.id_cat_prop}>{type.libelle}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="item">
                                <label htmlFor="statut">Statut</label>
                                <select id="statut" name="statut" onChange={handleChange} value={formData.statut}>
                                    <option value="">Sélectionnez un statut</option>
                                    <option value="Disponible">Disponible</option>
                                    <option value="Loué">Loué</option>
                                    <option value="Acheté">Acheté</option>
                                </select>
                            </div>
                            <div className="item">
                                <label htmlFor="depot_garantie">Dépôt de garantie</label>
                                <input min={0} id="depot_garantie" name="depot_garantie" type="number" placeholder="Entrer le montant du dépôt de garantie" onChange={handleChange} value={formData.depot_garantie} />
                            </div>
                            <button type="submit" className="sendButton">Ajouter</button>
                        </form>
                    </div>
                </div>
                <div className="sideContainer">
                    <div className="side_container_images">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Téléchargé ${index}`} />
                            
                        ))
                        }
                    </div>
                    <UploadWidget
                        uwConfig={{
                            cloudName: "dfioddwnf",
                            uploadPreset: "real_estate",
                            multiple: true,
                            folder: 'asset',
                        }}
                        setState={setImages}
                    />
                </div>
            </div>
        </div>
    );
}

export default NewPosteProperty;
