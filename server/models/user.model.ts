import mongoose from "mongoose";

interface UserType {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema<UserType>({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model<UserType>("User", userSchema);
export default User;
