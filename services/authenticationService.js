import config from './serviceConfig';
import handleResponse from '../helpers/handle-response';

export default {
  login,
  // currentUserValue: getToken(),
};

// function getToken() {
//     const token = SyncStorage.getItem('currentUser');
//     return token != null ? JSON.parse(token) : null;;
// }

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // await AsyncStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    });
}
