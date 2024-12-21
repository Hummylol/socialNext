import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

// Interface for TypeScript (optional)
export interface IUser extends Document {
  email: string;
  password: string;
  username: string;
  profilePicture: string;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Define User Schema
const UserSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

// Password hashing before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Only hash the password if it's new or modified
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare entered password with the stored password
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Export the model
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
