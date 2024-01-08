import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
  },
  surname: {
    type: String,
    required: [true, "Surname must be provided"],
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Please provide phone number"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.Members || mongoose.model("Members", userSchema);

export default User;
