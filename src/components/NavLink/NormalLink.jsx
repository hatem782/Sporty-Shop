import React from "react";
import Link from "@mui/material/Link";

function NormalLink(props) {
  return (
    <Link href={props.href} target="_blank">
      {props.children}
    </Link>
  );
}

export default NormalLink;
