const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob_day: {
    type: Number,
    required: true,
  },
  dob_month: {
    type: Number,
    required: true,
  },
  dob_year: {
    type: Number,
    required: true,
  },
  show_gender: {
    type: Boolean,
    required: true,
  },
  gender_identity: {
    type: String,
    required: true,
  },
  gender_interest: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  matches: [
    {
      user_id: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Users", userSchema);
