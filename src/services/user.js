import { URL_API_LOCAL } from '../env/env';

export default class UserService {

  async create() {
    const data = {};
    const error = '';

    try {
      const response = await fetch(`${URL_API_LOCAL}/users/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      data = await response.json();
      if (response.ok) {
        
      } else {
        error = 'Error creating user';
      }
    } catch (err) {
      error = 'Error connecting server';
    }

    return { data, error }
  }
  
}