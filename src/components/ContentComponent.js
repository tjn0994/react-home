import React, { Component } from 'react';
import { Table } from 'reactstrap';
import UsersComponent from './users';

export default class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.fetchUsers()
    };
  }

  fetchUsers = () => {
    let users = [
      {id: 1, name: "User A", age: 20},
      {id: 2, name: "User B", age: 22},
      {id: 3, name: "User C", age: 23},
      {id: 4, name: "User D", age: 18},
      {id: 5, name: "User E", age: 21},
      {id: 6, name: "User F", age: 22}
    ];
    return users;
  }

  render() {
    return (
      <div className='container' style={{ paddingTop: 50, paddingBottom: 50, minHeight: 600 }}>
        <UsersComponent />
      </div>
    );
  }
}
