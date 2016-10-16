const API_GIPHY_URL = 'https://api.giphy.com/v1/gifs'
const API_KEY = 'dc6zaTOxFJmzC';

export default function (term) {
  let uri = API_GIPHY_URL + '/search?q=' + encodeURIComponent(term) + '&api_key=' + API_KEY;
  return fetch(uri)
    .then((response) => response.json())
    .then((response) => response.data);
}
