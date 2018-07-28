import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { addUsers } from '../store/actionCreators/getUsers';
import { API } from '../constants';
import UserItem from './UserItem.jsx';
import { PulseLoader } from 'react-spinners';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fetching: false,
			error: null
		};
	}

	goToUser = id => this.props.history.push(`/users/${id}`);

	moreUsers() {
		const { users, dispatch } = this.props;
		this.setState({fetching: true});
		const lastUserId = users[users.length-1].id;
		const QUERY = `10&since=${lastUserId}`;

		fetch(API + QUERY)
			.then(response => response.json())
			.then(data => {
				dispatch(addUsers(data));
				this.setState({fetching: false})
			})
			.catch(error => this.setState({ error, fetching: false }));
	}

	render() {
		const { fetching, error } = this.state;
		const { users, history } = this.props;

		if (error) return <p>Uuuups! Something went wrong. Plaease try again</p>;

		return (
			<div className='usersList'>
				{!!users.length &&
					<Table striped bordered condensed hover>
						<thead>
							<tr>
								<th>Avatar</th>
								<th>Login</th>
								<th>More info</th>
							</tr>
						</thead>
						<tbody>
						{users.map(user => <UserItem key={user.id} user={user} goTo={this.goToUser} />)}
						</tbody>
					</Table>}

				{fetching && <div className="spinner"><PulseLoader color={'#2aabd2'} loading={fetching} /></div>}

				<div className="buttons">
					{!!users.length && <Button bsStyle='info' bsSize='small' onClick={() => this.moreUsers()}>get 10 more...</Button>}
					<Button bsStyle='info' bsSize='small' onClick={() => history.goBack()}>Home</Button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users
});

export default connect(mapStateToProps)(Users);
