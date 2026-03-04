import express from "express";
import {create, gets, update, deletes,getById } from "../controllers/FabricCustomer.Controller.js";

const router = express.Router();


router.post("/", create);
router.get("/", gets);
router.put("/:id",update);
router.delete("/:id",deletes);
router.get("/:id",getById);


export default router;
