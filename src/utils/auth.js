import { jwtDecode } from 'jwt-decode';

export function isAuthenticated() {
  const token = getToken();

  if (!token)
    return false;

  const decodedToken = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  if (decodedToken.exp < currentTime) {
    clearToken();
    return false;
  }

  return true;
}

export function getToken() {
  return localStorage.getItem('authToken');
}

export function setToken(token) {
  localStorage.setItem('authToken', token);
}

export function clearToken() {
  localStorage.removeItem('authToken');
}

export const loggedUserId = jwtDecode(getToken()).userId;
