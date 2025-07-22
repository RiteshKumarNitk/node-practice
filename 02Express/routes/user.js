const express = require("express");
const {
  handlegetAllUsers,
  handleupdateUserById,
  handleDeleteUserById,
  handleGetUserById,
  handleCreateUser,
} = require("../controllers/user");

const router = express.Router();
// /user → GET and POST
router.route("/").get(handlegetAllUsers).post(handleCreateUser);

// /user/:id → GET, PATCH, DELETE
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleupdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
