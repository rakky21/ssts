import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // // THIS BREAKS MY CODE ON UI BUT NOT THROUGH THUNDER APP
    // match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minLegth: 5,
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
