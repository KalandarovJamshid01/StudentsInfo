const router = require("express").Router();
const groupController = require("./../controller/groupController");
router
  .route("/")
  .get(groupController.getAllGroup)
  .post(groupController.addGroup);

router
  .route("/:id")
  .get(groupController.getOneGroup)
  .patch(groupController.updateGroup)
  .delete(groupController.deleteGroup);

module.exports = router;
