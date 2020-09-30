import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Activities from './pages/Activities'
import EditActivity from './pages/EditActivity'
import AddActivity from './pages/AddActivity'
import Moves from './pages/Moves'
import EditMove from './pages/EditMove'
import AddMove from './pages/AddMove'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />

                <Route exact path="/moves/add" component={AddMove} />
                <Route exact path="/moves/:page_id" component={Moves} />
                <Route exact path="/moves/edit/:move_id" component={EditMove} />

                <Route exact path="/activities/add" component={AddActivity} />
                <Route exact path="/activities/:page_id" component={Activities} />
                <Route exact path="/activities/edit/:activity_id" component={EditActivity} />

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;