const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");

// associations

User.hasMany(Conversation);
// Many-to-many relationships
Conversation.belongsToMany(User, { through: "UserConversation" });
User.belongsToMany(Conversation, { through: "UserConversation" });
Message.belongsTo(Conversation);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  Message,
};
