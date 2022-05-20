import React from "react";

import IconButton from "@mui/material/IconButton";
import PersonOffIcon from "@mui/icons-material/PersonOff";

function DisablePerBtn(props) {
  const { onClick } = props;
  return (
    <div>
      <IconButton color="primary" onClick={onClick} aria-label="block">
        <PersonOffIcon />
      </IconButton>
    </div>
  );
}

export default DisablePerBtn;
