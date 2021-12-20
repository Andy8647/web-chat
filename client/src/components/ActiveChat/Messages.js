import React from "react";
import { Avatar, Box, makeStyles } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  avatar: {
    width: 20,
    height: 20,
    marginTop: 5,
  },
}));

const Messages = (props) => {
  const { messages, otherUser, userId, latestReadMessage } = props;
  const classes = useStyles();

  const senderBubbleWithReaderAvatar = (m, latestM, otherUser) => {
    if (!latestM || latestM !== m.id) {
      return null;
    } else {
      return (
        <Avatar
          alt={otherUser.name}
          src={otherUser.photoUrl}
          className={classes.avatar}
        ></Avatar>
      );
    }
  };

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <Box key={message.id} className={classes.root}>
            <SenderBubble key={message.id} text={message.text} time={time} />
            {senderBubbleWithReaderAvatar(
              message,
              latestReadMessage,
              otherUser
            )}
          </Box>
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
