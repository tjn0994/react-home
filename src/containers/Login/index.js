import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormik } from 'formik';

import { selector } from '../../selectors/authSelector';
import {LoginComponent} from '../../components/Login';
import { login } from '../../actions/authAction';
import validation from './validation';

export default compose(
  connect(selector, { login }),
  withFormik({
    displayName: 'Login Form',
    mapPropsToValues: () => ({ email: '', password: '' }),
    validationSchema: validation,
    handleSubmit: (values, {props, setErrors}) => {
      props.login({ user: values, meta: { setErrors } });
    },
  }),
)(LoginComponent);
