import React from 'react';
import './NavbarComponent.css'
import { Link } from 'react-router-dom';


function NavbarComponent() {
    return (
        <>
            <nav>
                <ul>
                    <li><img src="/src/assets/logo-rouge.png" alt="Logo de SportSee en rouge"></img></li>
                    <li><Link to="/dashboard/12">Accueil</Link></li>
                    <li><Link to="/">Profil</Link></li>
                    <li><Link to="/">Réglage</Link></li>
                    <li><Link to="/">Communauté</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavbarComponent
