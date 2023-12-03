import React, { useState } from 'react';
import './NavbarleftComponent.css'


function NavbarleftComponent() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    return (
        <>
            <div className="leftNavigation">
                <ul>
                    <li><img src="/src/assets/icon-yoga.png"></img></li>
                    <li><img src="/src/assets/icon-natation.png"></img></li>
                    <li><img src="/src/assets/icon-velo.png"></img></li>
                    <li><img src="/src/assets/icon-muscu.png"></img></li>
                </ul>
                <p>© Copyright, SportSee {currentYear}</p>
            </div>
        </>
    )
}

export default NavbarleftComponent
