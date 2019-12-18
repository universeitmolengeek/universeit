import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export const NavBarContain = () => {
    return (
        <div>
            <h1>Ceci est le contenu de la barre de navigation</h1>
        </div>
    )
}

if (document.getElementById('navBarContain')) {
    ReactDOM.render(<NavBarContain />, document.getElementById('navBarContain'));
}