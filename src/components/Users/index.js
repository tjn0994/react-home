import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import { User } from './UserComponent';
import { updateUser, deleteUser } from '../../actions/userAction';
import { selector } from '../../selectors/userSelector';

class UsersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: (props.users || [])
    };
  }

  componentDidMount() {
    if(this.state.users.length === 0) {
      this.setState({
        users: this.fetchUsers(),
      }, () => {
        this.props.updateUser({data: this.state.users});
      });
    }
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

  deleteUser = (id) => {
    const {users} = this.props;
    let index = users.findIndex((user) => user.id === id);
    users.splice(index, 1);
    this.props.deleteUser({ data: users });
    this.setState({
      users: users,
    });
  }

  render() {
    return (
      <div>
        <h3>List User</h3>
        <div>
          <Link to="/users/new">
            <Button outline color="success">Add</Button>{' '}
          </Link>
        </div>

        <div style={{ marginTop: 10 }}>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users && this.props.users.map(user => (
                <User
                  user={user}
                  key={user.id}
                  deleteUser={this.deleteUser}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default connect(selector, { updateUser, deleteUser })(UsersComponent);
