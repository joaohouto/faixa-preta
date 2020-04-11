import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

export default class Home extends Component {

    state = {
      
    }

    componentDidMount() {

    }

    render() {


        return (
            <div>

                <Header />


                <div className="container" style={{ minHeight: 530, }}>

                    

                </div>

                <footer style={{ color: '#555', background: '#111', textAlign: 'center', padding: 20 }}>
                    <p>&copy; 2020 Faixa Preta</p>
                </footer>
            </div>
        );
    }
}
