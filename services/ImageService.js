const apiUrl =
  'https://api.unsplash.com/photos/?client_id=rqvlp8dmdA61y6UyNy0YhAfNLMfLuKrAdBiKMcLqweI';
const api = 'http://localhost:3001';

export default {
  getExploreImages: () => {
    try {
      return fetch(`${apiUrl}`)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    } catch (err) {
      console.log('error handler inside try', err);
    }
  },

  getUserImages: (id, token) => {
    const requestOptions = {
      method: 'GET',
      headers: { authorization: `${token ? `Bearer ${token}` : ''}` },
    };

    try {
      return fetch(`${api}/images/${id}`, requestOptions)
        .then((response) => response.json())
        .catch((err) => console.log(err));
    } catch (err) {
      console.log('error handler inside try', err);
    }
  },

  uploadImage: (file, user_id, token) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${token ? `Bearer ${token}` : ''}`,
      },
      body: file,
    };

    try {
      return fetch(`${api}/images/upload/${user_id}`, requestOptions)
        .then((response) => response.json())
        .catch((err) => console.log('api error', err));
    } catch (err) {
      console.log(err);
    }
  },
};
