const User = require("../model/users");

const getAllUsers = async (req, res) => {
  let users;

  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }

  if (!users) {
    return res.status(404).json({ message: "No users found!" });
  }

  return res.status(200).json({ users });
};

const addUser = async (req, res) => {
  const {
    userId,
    hashed_password,
    first_name,
    email,
    dob_day,
    dob_month,
    dob_year,
    show_gender,
    gender_identity,
    gender_interest,
    image_url,
    about,
    matches,
  } = req.body;
  let user;

  try {
    user = new User({
      userId,
      hashed_password,
      first_name,
      email,
      dob_day,
      dob_month,
      dob_year,
      show_gender,
      gender_identity,
      gender_interest,
      image_url,
      about,
      matches,
    });
    await user.save();
  } catch (error) {
    console.log(error);
  }

  if (!user) {
    return res.status(500).json({ message: "Unable to add user" });
  }

  return res.status(201).json({ user });
};

exports.addUser = addUser;
exports.getAllUsers = getAllUsers;
