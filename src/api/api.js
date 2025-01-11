import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = 'ZT2I1OJq9uAcaOT3rEhFHuNPTG24Mrqqh_Xsw9U8pXs';

export const fetchImages = async (query, page) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      client_id: ACCESS_KEY,
      page,
    },
  });
  return response.data.results;
};
