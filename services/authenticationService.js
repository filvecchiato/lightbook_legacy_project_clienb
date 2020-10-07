const api = 'http://localhost:3001';

export default {
  login,
  createUser,
};

function login(data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: data.email, password: data.password }),
  };

  return fetch(`${api}/login`, requestOptions)
    .then((response) => response.json())
    .then((response) => {
      if ([401, 403].indexOf(response.status) !== -1) {
        return { response: 'error', status: 401 };
      } else {
        return response;
      }
    });
}

function createUser(data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  };

  return fetch(`${api}/signUp`, requestOptions)
    .then((response) => response.json())
    .then((response) => {
      if ([401, 403].indexOf(response.status) !== -1) {
        return { response: 'error', status: 401 };
      } else {
        return { response: response, status: 200 };
      }
    });
}
