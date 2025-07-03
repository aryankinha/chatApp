import express from "express";
import {
  addContact,
  getContact,
  deleteContact,
} from "../controller/usersController.js";

const router = express.Router();

router.get("/:userId/get-contact", getContact);
router.post("/:userId/add-contact", addContact);
router.delete("/:userId/add-contact", deleteContact);

export default router;
