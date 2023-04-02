const express = require("express");

const router = express.Router();
const {
  addBillsController,
  getBillsController,
} = require("../controllers/billsController");
//routes
//Method - get
router.post("/add-bills", addBillsController);
router.get("/get-bills", getBillsController);
//Method -Post

module.exports = router;
