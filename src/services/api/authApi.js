
import V1 from './v1';

class Auth extends V1 {
  // params by server receiver
  login = (values: Object) => this.client.post('/sessions', { email: values['email'], password: values['password'] });
  logout = () => this.client.delete('/sessions');
}

export const AuthApi = new Auth();
