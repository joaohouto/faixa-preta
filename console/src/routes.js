import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'

import Activities from './pages/Activities';
import ActivityEdit from './pages/ActivityEdit';
import ActivityNew from './pages/ActivityNew';

import Moves from './pages/Moves';
import MoveEdit from './pages/MoveEdit';
import MoveNew from './pages/MoveNew';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/activities/:page_id" component={Activities} />
            <Route exact path="/activities/edit/:actv_id" component={ActivityEdit} />
            <Route exact path="/activities/new/0" component={ActivityNew} />

            <Route exact path="/moves/:page_id" component={Moves} />
            <Route exact path="/moves/edit/:move_id" component={MoveEdit} />
            <Route exact path="/moves/new/0" component={MoveNew} />

        </Switch>
    </BrowserRouter>
);

export default Routes;