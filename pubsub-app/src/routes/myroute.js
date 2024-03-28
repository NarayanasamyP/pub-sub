import express, { response } from 'express';
// import formData from "express-form-data";
const router = express();
import {messages}  from "../pubsub/controller/Publisher-Controller.js";


router.get("/", messages);
router.post("/get", messages);

export default router;