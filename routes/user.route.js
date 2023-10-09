import express from "express";
import { userCollection } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", userCollection);

export default router;
