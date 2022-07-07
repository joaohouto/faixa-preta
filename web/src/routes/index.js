import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import Privacy from "../pages/Privacy";
import NotFound from "../pages/NotFound";

import Login from "../pages/Login";
import Activities from "../pages/Activity";
import EditActivity from "../pages/Activity/Edit";
import CreateActivity from "../pages/Activity/Create";
import Moves from "../pages/Move";
import EditMove from "../pages/Move/Edit";
import CreateMove from "../pages/Move/Create";

import AppMoves from "../pages/App/Moves/index";
import AppMove from "../pages/App/Move/index";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/privacidade" component={Privacy} />
				<Route exact path="/login" component={Login} />

				<Route exact path="/app/moves" component={AppMoves} />
				<Route exact path="/app/move/:move_id" component={AppMove} />

				<Route exact path="/dashboard/moves" component={Moves} isPrivate />
				<Route
					exact
					path="/dashboard/moves/create"
					component={CreateMove}
					isPrivate
				/>
				<Route
					exact
					path="/dashboard/moves/edit/:move_id"
					component={EditMove}
					isPrivate
				/>

				<Route
					exact
					path="/dashboard/activities"
					component={Activities}
					isPrivate
				/>
				<Route
					exact
					path="/dashboard/activities/create"
					component={CreateActivity}
					isPrivate
				/>
				<Route
					exact
					path="/dashboard/activities/edit/:activity_id"
					component={EditActivity}
					isPrivate
				/>
				<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
