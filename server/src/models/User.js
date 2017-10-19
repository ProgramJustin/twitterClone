import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    firstname: String,
    lastName: String,
    avatar: String,
    password: String,
    email: String,
  },
  { timestamps: true },
);
// pre hook, before scheme (before user has been saved), crypt the password
// this happens when updating password, or siging up
UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }
  return next();
});

// instance of the user schema hashing the password
UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  }
}

export default mongoose.model('User', UserSchema);
