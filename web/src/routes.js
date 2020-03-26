import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home.js';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sobre" component={About} />
            <Route exact path="/contato" component={Contact} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;