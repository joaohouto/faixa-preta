import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo-x.svg';
import infoIcon from '../assets/icons/info.svg';
import githubIcon from '../assets/icons/github.svg';

const Header = () => {

    return (
        <div className="header">
            <Link to="/"><img id="logo" src={logo} alt="Faixa Preta" /></Link>

            <ul>
                <li><Link to="/sobre"><img alt="[]" src={infoIcon} /> Sobre</Link></li>
                <li><a href="https://github.com/joaohouto/faixa-preta"><img alt="[]" src={githubIcon} /> GitHub</a></li>
            </ul>

        </div>
    );
}

export default Header;