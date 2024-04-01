import { PubSub  } from "@google-cloud/pubsub";
const pubSubClient = new PubSub();
const subscriptionName = "MySub";
const timeout = 60;
import {listenForPullMessages, listenForPushMessages} from "../../repositories/pub-sub-repo.js";
// const { listenForPullMessages, listenForPushMessages } = pubsubRepository;
// module.exports = {
    export function pullDelivery (req, res) {
        try {
            listenForPullMessages(pubSubClient, subscriptionName, timeout);            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Couldn't pull the data",
                data: error
            })                        
        }

    }
    export async function pushDelivery (req, res) {
        try {
            let messageResponse = await listenForPushMessages(req.body.message.data);
            return res.status(200).json({
                success: true,
                message: "Message received successfully!",
                data: messageResponse
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Couldn't receive message!",
                data: error
            })                        
        }
    }
// };