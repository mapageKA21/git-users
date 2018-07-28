import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import NotFound from './NotFound.jsx';
import Users from './Users.jsx';
import Details from './Details.jsx';

const App = () =>
	<BrowserRouter>
		<div className="container">
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/users' component={Users} />
				<Route path='/users/:id' component={Details} />
				<Route path='/notfound' component={NotFound} />
				<Redirect from='/*' to='/notfound' />
			</Switch>
		</div>
	</BrowserRouter>;

export default App;
