import { useState } from "react";
import React from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import compte_img2 from "../../asset/compte_img2.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
    contact: "",
    role: "Client"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error.response.data); // Affiche les détails de l'erreur
    }
  };

  return (
    <div className="register_bloc">
      <section className="register">
        <div className="testimonial">
          <img className="testimony_img" src={compte_img2} alt="" />
        </div>
        <div className="testimonial_line"></div>
        <form onSubmit={handleSubmit} autoComplete="off" className="form_register">
          <div className="register-card">
            <br />
            <h1>Inscription</h1>
          </div>
          <div className="register_word">
            <p>Créez un compte pour accéder à vos cours !</p>
          </div>
          <br />
          <br />

          <div className="form_add_register">
            <div className="input_register_row">
              <div className="input_reg">
                <label>Nom</label>
                <input
                  name="nom"
                  onChange={handleChange}
                  type="text"
                  minLength="4"
                  className="input_add"
                  autoComplete="off"
                  placeholder="Entrez votre nom"
                  required
                />
              </div>
              <div className="input_reg">
                <label>Prénom</label>
                <input
                  name="prenom"
                  onChange={handleChange}
                  type="text"
                  minLength="4"
                  className="input_add"
                  autoComplete="off"
                  placeholder="Entrez votre prénom"
                  required
                />
              </div>
            </div>
            <div className="input_register_row">
              <div className="input_reg">
                <label>Contact</label>
                <input
                  name="contact"
                  onChange={handleChange}
                  type="text"
                  minLength="4"
                  className="input_add"
                  autoComplete="off"
                  placeholder="Entrez votre contact"
                  required
                />
              </div>
              <div className="input_reg">
                <label>Rôle</label>
                <select className="input_add" name="role" onChange={handleChange}>
                  <option value="Locataire">Client</option>
                  <option value="Proprietaire">Propriétaire</option>
                </select>
              </div>
            </div>

            <div className="input">
              <label>Email</label>
              <input
                name="email"
                onChange={handleChange}
                type="text"
                minLength="4"
                className="input_add"
                autoComplete="off"
                placeholder="Entrez votre email"
                required
              />
            </div>

            <div className="input">
              <label>Mot de passe</label>
              <input
                name="motDePasse"
                onChange={handleChange}
                type="password"
                minLength="4"
                className="input_add"
                autoComplete="off"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>

            <button type="submit" className="register_btn">S'inscrire</button>
            <div className="ver_login">
              <span>ou</span>
              <p>Déjà un compte? <a href="/login"><strong>Connectez-vous.</strong></a> </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
