import client from './client';

const endPoint = '/users';

const allSortedUsers = () => client.get(endPoint);

const userMatches = () => client.get(endPoint + '/matches');

const registerUser = (first_name, last_name, mobile, password, meli_code) => {
  return client.post(endPoint, {
    first_name,
    last_name,
    mobile,
    password,
    meli_code,
  });
};

export default {
  userMatches,
  registerUser,
  allSortedUsers,
};
