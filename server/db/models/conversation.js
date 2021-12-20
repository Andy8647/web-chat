const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

// find conversation given array of user ids

Conversation.findConversation = async function (senderId, receivers) {
  const conversation = await Conversation.findOne({
    where: {
      sender: senderId,
      receivers: receivers,
    },
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;
