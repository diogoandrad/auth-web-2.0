import { setToken } from '../utils/auth';
import { API_URL } from '../env/env';

export default class AuthService {

  async login(body) {
    let data = {};
    let status = false;
    let message = '';

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        data = await response.json();
        status = response.ok;
        message = 'Successfully login!';
        setToken(data.accessToken);
      } else {
        message = 'Error login!';
      }
        
    } catch (error) {
      message = 'Error connecting server!';
    }

    return { data, message, status }
  }

  async register(body) {
    let data = {};
    let status = false;
    let message = '';

    try {      
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        data = await response.json();
        status = response.ok;
        message = 'Successfully created!';
      } else {
        message = 'Error creating user!';
      }
      
    } catch (error) {
      message = 'Error connecting server!';
    }

    return { data, message, status }
  }
}