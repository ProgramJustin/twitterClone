import User from '../../models/User';

export default {
  // signup: (_, { email, avatar, password, username, fullName }) => {
  //   const [firstName, ...lastName] = fullName.split(' ');
  //   return User.create({ firstName, lastName, username, password, email, avatar})
  // }
  // or
  signup: (_, { fullName, ...rest }) => {
    const [firstName, ...lastName] = fullName.split(' ');
    return User.create({ firstName, lastName, ...rest})
  }
}
