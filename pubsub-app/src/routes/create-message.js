import express from 'express';
// import formData from "express-form-data";
const msgCreateRouter = express();
import {createMessage}  from "../pubsub/controller/Publisher-Controller.js";

msgCreateRouter.get("/", createMessage);
msgCreateRouter.post("/api/create", createMessage);

export default msgCreateRouter;