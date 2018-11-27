import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import history from '../../services/RoutingService';
import { updateUser, createUser } from '../../actions/userAction';
import { selector } from '../../selectors/userSelector';

class FormUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      age: '',
    };
  }

  componentDidMount() {
    const { users, match } = this.props;
    let user = {};
    if (match.params['id'] && users) {
      user = users.find((user) => user.id === parseInt(match.params['id']))
    }
    this.setState({
      id: user.id,
      name: user.name,
      age: user.age,
    });
  }

  updateInput = (name, value) => {
    if(name === "age") value = parseInt(value);
    this.setState({[name]: value});
  }

  saveForm = () => {
    let {users} = this.props;
    const {id} = this.state;
    if (id) {
      let index = users.findIndex((e) => e.id === id);
      users.splice(index, 1, this.state);
      this.props.update({ users: users });
    } else {
      let id_new = (users.length === 0 ? 1 : (users[users.length - 1]["id"] + 1));
      users.push({id: id_new, age: this.state.age, name: this.state.name})
      this.props.create({ users: users });
    }
    history.replace('/');
  }

  render(){
    return (
      <div className='container' style={{ paddingTop: 50, paddingBottom: 50, minHeight: 600 }}>
        <Form>
          <FormGroup>
            <Label for='name'>Name</Label>
            <Input type='text' name='name' id='name' value={this.state.name || ''} placeholder='...' onChange={(e) => this.updateInput(e.target.name, e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Label for='age'>Age</Label>
            <Input type='number' name='age' id='age' value={this.state.age || ''} placeholder='...' onChange={(e) => this.updateInput(e.target.name, e.target.value)} />
          </FormGroup>
          <Button onClick={(e) => this.saveForm()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default connect(selector, {update: updateUser, create: createUser})(FormUserComponent);
