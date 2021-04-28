import client from '../api/client';
import jwtDecode from 'jwt-decode';

const getCureentUser = () => {
  try {
    const jwt = localStorage.getItem('token');
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
};

const logoutUser = () => {
  localStorage.removeItem('token');
};

const loginUserWithPassword = async (mobile, password) => {
  const result = await client.post('/users/passwordLogin', {
    mobile,
    password,
  });
  if (result.status !== 200) return result.data;
  localStorage.setItem('token', result.data);
  return true;
};

const requestOtp = async mobile => {
  const result = await client.post('/users/requestOtp', { mobile });
  if (result.status !== 200) return false;
  return true;
};

const loginUserWithOtp = async (mobile, otp) => {
  const result = await client.post('/users/otpLogin', {
    mobile,
    otp_code: otp,
  });
  if (result.status !== 200) return result.data;
  localStorage.setItem('token', result.data);
  return true;
};

export default {
  loginUserWithPassword,
  requestOtp,
  loginUserWithOtp,
  getCureentUser,
  logoutUser,
};
