import React from 'react'

const Header = () => (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container">
        <a className="navbar-brand" href="/">Faixa Preta <span className="badge badge-secondary">CONSOLE</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                <li className="nav-item">
                    <a className="nav-link" href="/activities/1">Atividades</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/moves/1">Movimentos</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
);

export default Header;