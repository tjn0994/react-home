import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormik } from 'formik';

import { selector } from '../../../selectors/userSelector';
import {FormUserComponent} from '../../../components/Users/FormUserComponent';
import { createUser, updateUser } from '../../../actions/userAction';
import validation from './validation';

// Ex1:
// const FormikFormUser = withFormik({
//   displayName: 'User Form',
//   mapPropsToValues: (props: Props) => {
//     const user = props.users.find((user) => user.id === parseInt(props.match.params["id"]));
//     if (user) {
//       return (
//         {
//           id: user["id"] || '',
//           name: user["name"] || '',
//           age: user["age"] || '',
//         }
//       );
//     } else {
//       return ({ id: '', name: '', age: '' });
//     }
//   },
//   validationSchema: validation,
//   handleSubmit: (values, option) => {
//     const {users, create, update, history } = option.props;
//     if(values["id"]) {
//       let index = users.findIndex((user) => user.id === values["id"]);
//       users.splice(index, 1, {id: values["id"], name: values["name"], age: values["age"]});
//       updateUser({ users: users });
//     } else {
//       let id_new = (users.length === 0 ? 1 : (users[users.length - 1]["id"] + 1));
//       users.push({id: id_new, name: values["name"], age: values["age"]})
//       createUser({ users: users });
//     }
//     history.replace('/');
//   },
// })(FormUserComponent);
//
// export default connect(selector, {updateUser, createUser})(FormikFormUser);

// Ex2:
export default compose(
  connect(selector, { updateUser, createUser }),
  withFormik({
    displayName: 'User Form',
    mapPropsToValues: (props: Props) => {
      const user = props.users.find((user) => user.id === parseInt(props.match.params["id"]));
      if (user) {
        return (
          {
            id: user['id'] || '',
            name: user['name'] || '',
            age: user['age'] || '',
          }
        );
      } else {
        return ({ id: '', name: '', age: '' });
      }
    },
    validationSchema: validation,
    handleSubmit: (values, option) => {
      const {users, history, updateUser, createUser } = option.props;
      if (values['id']) {
        let data = users.filter(function(user) {
          if (user['id'] === values['id']) {
            user['age'] = values['age'];
            user['name'] = values['name'];
          }
          return user;
        });
        updateUser({ data: data });
      } else {
        values['id'] = (users.length === 0 ? 1 : (users[users.length - 1]['id'] + 1));
        let data = users.concat(values);
        createUser({ data: data });
      }
      history.replace('/');
    },
  }),
)(FormUserComponent);
