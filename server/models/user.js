import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new Schema({
  username: { type: 'String', required: true },
  password: { type: 'String', required: true },
  admin: { type: 'Boolean' },
});

userSchema.plugin(passportLocalMongoose);

export default mongoose.model('User', userSchema);
