import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

const request = ({ headers = {}, url, method = 'get', data, token }) => {
  const newHeaders = headers;
  if (token) {
    newHeaders.authorization = token;
  }

  return axios({
    headers: newHeaders,
    url: `${baseURL}${url}`,
    method,
    data,
  }).then(response => response.data)
    .catch((error) => {
      /** Better handling of error */
      throw error;
    });
};

export default request;
