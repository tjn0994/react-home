import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import history from '../../services/RoutingService';
import { updateUser, createUser } from '../../actions/userAction';
import { selector } from '../../selectors/userSelector';

class FormUserComponent extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {
      values,
      errors,
      handleChange,
      handleSubmit,
      touched,
    } = this.props;
    return (
      <div className='container' style={{ paddingTop: 50, paddingBottom: 50, minHeight: 600 }}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for='name'>Name</Label>
            <Input type='text' name='name' id='name' value={this.props.values["name"] || ''} placeholder='...' onChange={handleChange} />
          </FormGroup>
          <div>{touched.name && errors["name"]}</div>
          <FormGroup>
            <Label for='age'>Age</Label>
            <Input type='number' name='age' id='age' value={this.props.values["age"] || ''} placeholder='...' onChange={handleChange} />
          </FormGroup>
          <div>{touched.age && errors["age"]}</div>
          <Button type="submit" >Submit</Button>
        </Form>
      </div>
    );
  }
}

export default FormUserComponent;
