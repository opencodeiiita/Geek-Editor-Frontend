import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";

// Components
import Home from "./Loginsignup/Home";
import User from "./Components/User";
import Compiler from "./Compiler/Compiler";

export default function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home}></Route>
			<Route exact path="/user" component={User}></Route>
			<Route exact path="/compiler" component={Compiler}></Route>
			{/* Route dashboard here */}
		</Switch>
	);
}
