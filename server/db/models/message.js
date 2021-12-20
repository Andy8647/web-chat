const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("message", {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  receivers: {
    // array of userIds in this group chat
    type: Sequelize.JSONB,
    allowNull: false,
  },
  readByReceiver: {
    // format: {user1Id: boolean, user2Id: booolean, ...}
    type: Sequelize.JSONB,
    allowNull: false,
    // defaultValue: false
    // set to false by defualt in the require of posting message
  },
});

module.exports = Message;