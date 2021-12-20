import React from "react";
import { Box, Typography, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  unReadNumBadge: {
    fontSize: "14px",
    fontWeight: 900,
    top: 20,
    right: 20,
  },
}));

const ChatContent = (props) => {
  const classes = useStyles();

  const { conversation } = props;
  const { latestMessageText, otherUser, unReadNum } = conversation;

  return (
    <Badge
      badgeContent={unReadNum}
      color="primary"
      classes={{ root: classes.root, badge: classes.unReadNumBadge }}
    >
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        {!unReadNum ? (
          <Typography className={classes.previewText}>
            {latestMessageText}
          </Typography>
        ) : (
          <Typography
            className={classes.previewText}
            style={{ fontWeight: "900", color: "black" }}
          >
            {latestMessageText}
          </Typography>
        )}
      </Box>
    </Badge>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ChatContent);
