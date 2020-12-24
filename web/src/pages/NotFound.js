import React, { Component } from 'react';
import '../style.css'

export default class NotFound extends Component {

  render() {
    return (
        <div className="not-found animate-opacity">
          <h2 style={{ margin: 0 }}>404</h2>
          <p style={{ marginLeft: 20, marginTop: 0 }}>Nada foi encontrado!</p>
        </div>
    );
  }
}
