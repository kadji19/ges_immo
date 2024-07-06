import React, { useRef, useState } from 'react';
import './header.css';
import logo from '../../asset/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    const [croix, setCroix] = useState(false)

    const navRef = useRef();

    const showCroix = () =>{
        setCroix(!croix)
    }

    const toggleNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
        showCroix(); // Appel de showCroix pour basculer entre hamburger et croix
      };
  return (
    <header>
        <div className="logo">
            <a href=""><img src={logo} alt=""/></a>
        </div>
        <div className='menu_icon' onClick={toggleNavbar}>
                {croix ? (
                    // Affichage de l'icône de la croix si croix est vrai
                   // <box-icon name='x'></box-icon>
                    <h1>x</h1>
                ) : (
                    // Affichage de l'icône du hamburger par défaut
                    <div className='hamburger'>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                )}
            </div>
        <div className="menu" ref={navRef}>
            <ul class="menu_nav">
                <li className="nav_item"> <Link className='nav_link' to='/'>Accueil</Link> </li>
                <li className="nav_item"> <Link className='nav_link' to='/vendre'>A vendre</Link> </li>
                <li className="nav_item"> <Link className='nav_link' to='/contact'>Contact</Link> </li>
            </ul>
            <div class="btn_header">
                <button className="btn_inscrip"><Link className='nav_link' to='/register'>Inscription</Link></button>
                <button className="btn_connex"><Link className='nav_link' to='/login'>Connexion</Link></button>
            </div>
        </div>
       
    </header>
  )
}

export default Header