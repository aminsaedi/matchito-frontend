import client from './client';

const endPoint = 'participants';

const registerUserToMatch = (user_id, match_id) =>
  client.post(endPoint, { user_id, match_id });

export default {
  registerUserToMatch,
};
