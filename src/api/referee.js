import client from './client';

const endPoint = '/referees';

const getAllReferees = () => client.get(endPoint);

export default {
  getAllReferees,
};
