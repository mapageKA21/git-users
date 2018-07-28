import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Image, Button } from 'react-bootstrap';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	componentDidMount() {
		const { users } = this.props;
		users.length ? this.saveToLocalStorage() : this.getFromLocalStorage();
	 }

	saveToLocalStorage() {
		const { users, match } = this.props;
		const user = users.filter(user => user.id === parseInt(match.params.id, 10))[0];
		localStorage.setItem('user', JSON.stringify(user));
	}

	getFromLocalStorage() {
		let value = localStorage.getItem('user');
		// parse the localStorage string and setState
		try {
			value = JSON.parse(value);
			this.setState({ user: value });
		} catch (e) {
			// handle empty string
			this.setState({ user: value });
		}
	}

	render() {
		const { users, match } = this.props;
		const user = users.filter(user => user.id === parseInt(match.params.id, 10))[0] || this.state.user;

		return (
			<div className='usersList'>
				{user &&
					<Table striped bordered condensed hover>
						<thead>
							<tr>
								<th>ID</th>
								<th>Avatar</th>
								<th>Login</th>
								<th>Web</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{user.id}</td>
								<td><Image src={user.avatar_url} alt='Avatar' className='avatar' circle /></td>
								<td>{user.login}</td>
								<td><a href={user.html_url} target='_blank'>{user.html_url}</a></td>
							</tr>
						</tbody>
					</Table>}

				<div className="buttons">
					<Button bsStyle='info' onClick={() => this.props.history.goBack()}>Back</Button>
					<Button bsStyle='info' onClick={() => this.props.history.push('/')}>Home</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users
});

export default connect(mapStateToProps)(Details);
