import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginComponent = (props) => {
  const { values, errors, handleChange, handleSubmit, touched } = props;
  return (
    <div className='container' style={{ paddingTop: 50, paddingBottom: 50, minHeight: 600 }}>
      <div style={{ color: 'red' }}>{errors.api}</div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='email'>Email</Label>
          <Input type='text' name='email' id='email' value={values['email'] || ''} placeholder='...' onChange={handleChange} />
        </FormGroup>
        <div style={{ color: 'red' }}>{touched.email && errors['email']}</div>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input type='password' name='password' id='password' value={values['password'] || ''} placeholder='...' onChange={handleChange} />
        </FormGroup>
        <div style={{ color: 'red' }}>{touched.password && errors['password']}</div>
        <Button type='submit' style={{ marginTop: 10 }}>Submit</Button>
      </Form>
    </div>
  );
}

export {LoginComponent};
