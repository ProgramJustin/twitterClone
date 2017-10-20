// all stuff about authentication
import jwt from 'jsonwebtoken';
// import constants to get JWT secret
import constants from '../config/constants';

export async function requireAuth(user) {
  if (!user || !user._id) {
    throw new Error('Unauthorized!');
  }
}

// take a token and split it inside an array
export function decodeToken(token) {
  const arr = token.split(' ');

  if (arr[0] === 'Bearer') {
    // synchronously verify given token using a secret or a public key to get a decoded token
    return jwt.verify(arr[1], constants.JWT_SECRET);
  }
  throw new Error('Token not valid');
}
