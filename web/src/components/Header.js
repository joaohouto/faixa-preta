import React from 'react'
import Link from 'next/link'

const Header = () => {

    return (
        <div className="header">
            <Link href="/"><a><img id="logo" src="./logo-x.svg" alt="Faixa Preta" /></a></Link>

            <ul>
                <li><Link href="/sobre"><a><img alt="[]" src="./icons/info.svg" /> Sobre</a></Link></li>
                <li><a href="https://github.com/joaohouto/faixa-preta"><img alt="[]" src="./icons/github.svg" /> GitHub</a></li>
            </ul>

        </div>
    );
}

export default Header;