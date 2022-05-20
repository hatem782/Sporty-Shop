import React from "react";

import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import IconButton from "@mui/material/IconButton";

function SendMailBtn(props) {
  const { onClick } = props;
  return (
    <div>
      <IconButton color="primary" onClick={onClick} aria-label="send mail">
        <ForwardToInboxIcon />
      </IconButton>
    </div>
  );
}

export default SendMailBtn;
