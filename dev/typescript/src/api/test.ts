import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://127.0.0.1:7777/';

const addAPI = async (num1: number, num2: number): Promise<number | undefined> => {
  const endpoint = `${BASE_URL}add`;

  const data = {
    num1: num1,
    num2: num2,
  };

  try {
    const response: AxiosResponse = await axios.post(endpoint, data);
    console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    console.error('Error in POST request:', error);
    return undefined;
  }
};

export { addAPI };
