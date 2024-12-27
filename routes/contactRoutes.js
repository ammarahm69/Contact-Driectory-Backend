import express from "express";
import {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
} from "../controllers/contactControllers.js";

const router = express.Router();

// Routes
router.post("/", addContact);
router.get("/", getContacts); 
router.put("/:id", updateContact); 
router.delete("/:id", deleteContact); 

export default router;
