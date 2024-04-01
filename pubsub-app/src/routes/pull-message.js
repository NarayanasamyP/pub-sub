import express from 'express';
// import formData from "express-form-data";
const pullMsgRouter = express();
import {pullDelivery}  from "../pubsub/controller/Subscriber-Controller.js";

pullMsgRouter.get("/", pullDelivery);
pullMsgRouter.post("/api/pull", pullDelivery);

export default pullMsgRouter;