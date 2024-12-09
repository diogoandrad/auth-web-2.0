import { setToken } from '../utils/auth';
import { API_URL } from '../env/env';

const API = 'auth';

export default class AuthService {

  async login(body) {
    let data = {};
    let status = false;
    let message = '';

    try {
      const response = await fetch(`${API_URL}/${API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        data = await response.json();
        status = response.ok;
        message = `Welcome, ${data.userName}!`;
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
      const response = await fetch(`${API_URL}/${API}/register`, {
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