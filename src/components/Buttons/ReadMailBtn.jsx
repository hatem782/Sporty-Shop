import React from "react";

import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import IconButton from "@mui/material/IconButton";

function ReadMailBtn(props) {
  const { onClick } = props;
  return (
    <div>
      <IconButton color="primary" onClick={onClick} aria-label="read mail">
        <MarkEmailUnreadIcon />
      </IconButton>
    </div>
  );
}

export default ReadMailBtn;
