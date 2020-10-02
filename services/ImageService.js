import serviceConfig from './serviceConfig';

const mainUrl = serviceConfig.mainUrl;
const apiUrl = serviceConfig.unsplash;
const cloudinaryUrl = serviceConfig.cloudinaryDown;

export default {
  getExploreImages: () => {
    try {
      console.log('inside getexpoloreimages');
      return fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log('error handler inside try', err);
    }
  },
  getUserImages: () => {
    try {
      console.log('inside getuserimages');
      return fetch(apiUrl)
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log('error handler inside try', err);
    }
  },
};
