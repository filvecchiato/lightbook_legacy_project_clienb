import config from 'config';
import authHeader from '../helpers/auth-header';
import handleResponse from '../helpers/handle-response';

export default function getAll() {
  const requestOptions = { method: 'GET', headers: authHeader() };
  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}
