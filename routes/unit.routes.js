import express from "express";
import {create, gets, update, deletes
} from "../controllers/Unit.Controller.js";

const router = express.Router();

router.post("/", create);
router.get("/", gets);
router.put("/:id",update);
router.delete("/:id",deletes);

export default router;
