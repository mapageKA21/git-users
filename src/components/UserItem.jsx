import React from 'react';
import { Button , Image } from 'react-bootstrap';

const User = ({user, goTo}) =>
    <tr key={user.id}>
        <td><Image src={user.avatar_url} alt='Avatar' className='avatar' circle /></td>
        <td>{user.login}</td>
        <td><Button bsStyle='info' bsSize='xsmall' onClick={() => goTo(user.id)}>+</Button></td>
    </tr>;

export default User;
