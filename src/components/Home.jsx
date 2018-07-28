import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from '../store/actionCreators/getUsers';
import { API } from '../constants';
import { PulseLoader } from 'react-spinners';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			fetching: false,
			error: null
		};
	}

	handleChange = event => this.setState({ value: event.target.value });

	getValidationState() {
		const isnum = /^\d+$/.test(this.state.value);
		if (isnum) {
			const num = parseInt(this.state.value, 10);
			if (num > 0 && Number.isInteger(num)) return 'success';
		}
		else return 'error';
	}
	
	goToUsers = query => {
		const { history, dispatch } = this.props;
		this.setState({fetching: true});

		fetch(API + query)
			.then(response => response.json())
			.then(data => {
				dispatch(getUsers(data));
				this.setState({fetching: false});
				history.push('/users');
		  })
		  .catch(error => this.setState({ error, fetching: false }));
	};

	render() {
		const { value, fetching, error } = this.state;

		if (error) return <p>Uuuups! Something went wrong. Plaease try again.</p>;

		return (
			<div>
			{fetching ?
				<PulseLoader
					color={'#2aabd2'} 
					loading={fetching} /> :

				<form>
					<FormGroup
						controlId="fetchForm"
						validationState={this.getValidationState()}>

						<ControlLabel>How many users do you want to fetch? Maximum is 100.</ControlLabel>
						<FormControl
							type="text"
							value={this.state.value}
							placeholder="Enter a number between 1 and 100"
							onChange={this.handleChange} />
						<HelpBlock>Only positive numbers are allowed.</HelpBlock>
					</FormGroup>
					<Button disabled={this.getValidationState() !== 'success'} bsStyle='info' bsSize='large' active onClick={() => this.goToUsers(value)}>Get users!</Button>
				</form>}
			</div>
		)
	}
}

export default connect()(withRouter(Home));
