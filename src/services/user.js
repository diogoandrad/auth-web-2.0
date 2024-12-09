import { API_URL } from '../env/env';
import { getToken } from '../utils/auth';

const API = 'users';
const TOKEN = getToken();

export default class UserService {

  async getAll() {
    let data = [];
    let status = false;
    let message = '';

    try {
      const response = await fetch(`${API_URL}/${API}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': TOKEN }
      });

      if (response.ok) {
        data = await response.json();
        status = response.ok;
        message = 'Successfully collected users!';
      } else {
        message = 'Error getting users!';
      }
        
    } catch {
      message = 'Error connecting server!';
    }

    return { data, message, status }
  }
  
}
