import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import Landing from "../pages/Landing";
import Privacy from "../pages/Privacy";
import NotFound from "../pages/NotFound";

import SignIn from "../pages/SignIn";
import Activities from "../pages/Activity";
import EditActivity from "../pages/Activity/Edit";
import CreateActivity from "../pages/Activity/Create";
import Moves from "../pages/Move";
import EditMove from "../pages/Move/Edit";
import CreateMove from "../pages/Move/Create";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/privacidade" component={Privacy} />
				<Route exact path="/auth" component={SignIn} />

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
