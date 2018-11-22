import React from 'react';

const User = (props) => {
  const { user } = props;

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td></td>
    </tr>
  );
}

export {User};
