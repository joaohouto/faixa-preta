import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Route from './Route'

import Login from './pages/Login'
import Activities from './pages/Activities'
import EditActivity from './pages/EditActivity'
import AddActivity from './pages/AddActivity'
import Moves from './pages/Moves'
import EditMove from './pages/EditMove'
import AddMove from './pages/AddMove'
import NotFound from './pages/NotFound'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />

                <Route exact path="/moves/add" component={AddMove} isPrivate />
                <Route exact path="/moves/:page_id" component={Moves} isPrivate/>
                <Route exact path="/moves/edit/:move_id" component={EditMove} isPrivate />

                <Route exact path="/activities/add" component={AddActivity} isPrivate />
                <Route exact path="/activities/:page_id" component={Activities} isPrivate />
                <Route exact path="/activities/edit/:activity_id" component={EditActivity} isPrivate />

                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;