import express from "express";
import {
  createSerialNumber,
  getSerialNumbers,
  updateCurrentNumber,
  deleteSerialNumber,
  updateSerialNumber
} from "../controllers/serialNumber.controller.js";

const router = express.Router();

router.post("/", createSerialNumber);
router.get("/", getSerialNumbers);
router.put("/:id",updateSerialNumber);
router.put("/currentnumber/:id", updateCurrentNumber);
router.delete("/:id",deleteSerialNumber);

export default router;
