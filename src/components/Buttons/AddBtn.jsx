import React from "react";

import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

function AddBtn(props) {
  const { onClick } = props;
  return (
    <div>
      <IconButton color="primary" onClick={onClick} aria-label="add">
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default AddBtn;
