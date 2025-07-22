const User = require("../model/user");

async function handlegetAllUsers(req, res){
 const alldbUsers = await User.find({});

 return res.json(alldbUsers);
}

async function handleGetUserById(req, res){
  const user = await User.findById(req.params.id);
  // const id = Number(req.params.id);
  // const user = users.find((user) => user.id === id);
  if (!user) return res.status(404).json({ error: "user not found" });

  return res.json(user);
}
async function handleupdateUserById(req, res){
    await User.findByIdAndUpdate(req.params.id, { LastName: "deshmukh" });
    return res.json({ status: "done" });
}
async function handleDeleteUserById(req, res){
 await User.findByIdAndDelete(req.params.id); // use delete instead of update for delete route
    return res.json({ status: "done" });
}
async function handleCreateUser(req, res){
  const body = req.body;
    if (
      !body.first_name ||
      !body.phone ||
      !body.last_name ||
      !body.gender ||
      !body.email ||
      !body.job_title
    ) {
      return res.status(400).json("all fields are required to fill");
    }

    try {
      const result = await User.create({
        firstName: body.first_name,
        LastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
        phone: body.phone,
      });
      console.log("Created user:", result);
      return res.status(201).json({ msg: "success", id:result._id });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
}

module.exports = { handlegetAllUsers,handleDeleteUserById,handleupdateUserById, handleGetUserById,handleCreateUser };