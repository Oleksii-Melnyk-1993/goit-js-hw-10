const BASIC_URL = `https://api.thecatapi.com/v1/breeds/`;
const IMAGE_URL = 'https://api.thecatapi.com/v1/images';
const api_key = `live_lvD3uI5CdihOHbstnJUM5V1e97yo8eoKfhXalfYIIHTtwX7IxIZERCdbUTsJcHcB`;

const fetchBreeds = () => {
  return fetch(`${BASIC_URL}?${api_key}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

const fetchCatByBreed = breedId => {
  return fetch(`${IMAGE_URL}?${api_key}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};

export { fetchBreeds, fetchCatByBreed };
