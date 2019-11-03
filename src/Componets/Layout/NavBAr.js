import React from 'react';
import { Link } from 'react-router-dom'; 

const NavBAr = () => {
    return (
        <div className="BarNav" >
            <ul className="navegacion">
                <li>
                    <Link to="/pageHome">Home</Link>
                </li>
                <li>
                    <Link to="/pageBlog">Blog</Link>
                </li>
                <li>
                    <Link to="/pageContacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/pageNosotros">Nosotros</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBAr;