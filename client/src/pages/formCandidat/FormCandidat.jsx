import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UseContext';
import './formCandidat.css';
import axios from 'axios';

const FormCandidat = ({id}) => {
    const { toggleModal, userId  } = useContext(UserContext);
    const [formData, setFormData] = useState({
        id_propriete:id,
        id_client:userId,
        contact:'',
        situation:'',
        message:'',
    });
console.log(id)
console.log(userId)
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/api/candidats/add", formData);
            alert("Votre demande de candidature a été effectué avec succès");
        } catch (error) {
            console.error("Erreur lors du demande de candidature!", error);
        }
    };


  return (
    <div className="modal">
    <div className="modal_content">
        <span className="close" onClick={toggleModal}>&times;</span>
        <h3>demande de candidature</h3>
        <form onSubmit={handleSubmit} className='candidat_form'>
            <div className="item">
                <label htmlFor="titre">Contact</label>
                <input className='item_input' id="contact" name="contact" type="number" placeholder="Entrer votre contact" onChange={handleChange} value={formData.contact} />
            </div>
            <div className="item">
                <label htmlFor="situation">Situation</label>
                <select id="situation" name="situation" onChange={handleChange} value={formData.situation}>
                    <option value="">choisissez votre situation </option>
                    <option value="Fonctionnaire">fonctionnaire</option>
                    <option value="Etudiant">étudiant</option>
                    <option value="Sans emplois">sans emplois</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor="titre">Message</label>
                <textarea className='item_descrip' id="message" name="message" placeholder="Entrer votre message" onChange={handleChange} value={formData.message}></textarea>
            </div>
            <button className='cand_form_btn'>Soumetre</button>
        </form>
    </div>
</div>
  )
}

export default FormCandidat