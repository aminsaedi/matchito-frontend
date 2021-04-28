import client from './client';

const endpoint = '/matches';

const getActiveMatches = () => client.get(endpoint + '/active');

const getAllMatches = () => client.get(endpoint);

export default {
  getActiveMatches,
  getAllMatches,
};
