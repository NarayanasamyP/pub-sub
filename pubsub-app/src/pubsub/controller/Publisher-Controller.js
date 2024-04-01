// const { PubSub } = require("@google-cloud/pubsub");
import { PubSub } from '@google-cloud/pubsub';
import {listenForPullMessages,listenForPushMessages,publishMessage} from "../../repositories/pub-sub-repo.js";

const pubSubClient = new PubSub();
const topicName = "MyTopic";
// const { publishMessage } = pubsubRepository;

export function messages(req, res) {
    return res.status(200).json({
        success: true,
        message: "Messages fetched successfully!",
    });
}

export async function createMessage (req, res) {
        let ordersObj = req.body;
        let messageId = await publishMessage(pubSubClient, topicName, ordersObj);
        return res.status(200).json({
            success: true,
            message: `Message ${messageId} published :)`,
            payload: req.body
        })
    }