import User from '../../models/User';

export default {
  // signup: (_, { email, avatar, password, username, fullName }) => {
  //   const [firstName, ...lastName] = fullName.split(' ');
  //   return User.create({ firstName, lastName, username, password, email, avatar})
  // }
  // or
  signup: async (_, { fullName, ...rest }) => {
    const [firstName, ...lastName] = fullName.split(' ');
    const user = await User.create({ firstName, lastName, ...rest });
    return {
      token: user.createToken()
    }
  },
  getUser: (_, { _id }) => User.findById(_id),
  getUsers: () => User.find({}).sort({ createdAt: -1 }),

  login: async (_, { email, password }) => {
    // await handles async code
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User does not exist!');
    }
    if (!user.authenticateUser(password)) {
      throw new Error('password does not match')
    }
    return user;
  }
}
