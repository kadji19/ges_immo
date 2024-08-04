import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import compte_img1 from '../../asset/compte_img1.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    motDePasse: ''
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
      const response = await axios.post('http://localhost:5000/api/users/login', formData);
      localStorage.setItem('token', response.data.token);
      const role = JSON.parse(atob(response.data.token.split('.')[1])).role;
      if (role === 'Proprietaire') {
        navigate('/dashboard/property');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
    }
  };

  return (
    <div className='login_bloc'>
      <section className="login">
        <form onSubmit={handleSubmit} autoComplete="off" className="form_login">
          <div className="log-card">
            <br />
            <h1>Connexion</h1>
          </div> 
          <div className='login_word'>
            <p>Content de vous revoir! Veuillez vous connecter pour accéder à votre compte.</p>
          </div>
          <br /><br />
          <div className="form_add_login">
            <div className="input">
              <label>Email</label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
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
                className="input_add"
                autoComplete="off"
                placeholder="Entrez votre mot de passe"
                required
              />
            </div>
            <button type="submit" className="connect_btn">Se connecter</button>
          </div>
          <div className="ver_login">
            <span>ou</span>
            <p>Pas de compte? <a href="/register"><strong>créez-en.</strong></a></p>
          </div>
        </form>
        <div className="testimony">
          <img className='testimony_img' src={compte_img1} alt="" />
        </div>
      </section>      
    </div>
  );
};

export default Login;
