import React from 'react';
import { Button } from 'react-bootstrap';

const NotFound = () =>
	<div>
		<div className='notFound'>
            <h1>404</h1>
			<h3>Sorry, this page does not exist! :)</h3>
			<a href='/'><Button bsStyle='info'>Home</Button></a>
		</div>
	</div>;

export default NotFound;
