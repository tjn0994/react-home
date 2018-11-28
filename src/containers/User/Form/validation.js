import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must have min 2 characters')
    .max(255, 'Name have max 255 characters'),
  age: Yup.number()
    .required('Age is required')
    .min(1, 'Age must have min is 1')
    .max(150, 'Age must have max is 150')
    .integer('Please provide integer'),
});
