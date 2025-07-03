import express from "express";
import {
  addContact,
  getContact,
  deleteContact,
} from "../controller/usersController.js";

const router = express.Router();

router.get("/:userId/get-contacts", getContact);
router.post("/:userId/add-contact", addContact);
router.delete("/contacts/:contactId", deleteContact);

export default router;
