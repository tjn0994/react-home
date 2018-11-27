import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const User = (props) => {
  const { user, deleteUser } = props;

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>
        <Link
          to={{
            pathname: `/users/${user.id}/edit`
          }}>
          <Button outline color="warning">Edit</Button>{' '}
        </Link>
        <Button outline color="danger" onClick={(e) => deleteUser(user.id)}>Delete</Button>
      </td>
    </tr>
  );
}

export {User};
