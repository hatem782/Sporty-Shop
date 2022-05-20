import React, { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import CloseBtn from "../../../components/Buttons/CloseBtn";
import { DateParser } from "../../../functions/DateTimeFn";
import Divider from "@mui/material/Divider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "0px 15px 0px 15px",
    "& h2": {
      padding: "0px",
      margin: "10px 0px",
      fontSize: "18px",
    },
    "& .p": {
      fontSize: "16px",
      fontWeight: "600",
    },
    "& span.blue": {
      color: theme.palette.primary.main,
    },
  },
  title: {
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "1.5em",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& button": {
      margin: "0px 20px !important",
    },
  },
}));

/*const isArabic = (text) => {
  var arabic = /[\u0600-\u06FF]/;
  return arabic.test(text);
};*/

const SendMail = (props) => {
  const { dialog, handleClose } = props;
  const { active, value, title } = dialog;
  const classes = useStyles();

  const Item = value;

  // useEffect(() => {
  //   console.log(Item);
  // }, [Item]);

  return (
    <div>
      <Dialog
        open={active}
        TransitionComponent={Transition}
        onClose={handleClose}
        scroll={"paper"}
      >
        <DialogTitle className={classes.title}>
          {title}
          <CloseBtn onClick={handleClose} />
        </DialogTitle>

        <DialogContent dividers>
          <div className={classes.card}>
            <h2>
              <span className="blue"> Email : </span>
              {Item.email}
            </h2>
            <Divider />
            <h2>
              <span className="blue"> Date of sending : </span>
              {DateParser(Item.sendDate)}
            </h2>
            <Divider />
            <h2>
              <span className="blue"> Sender : </span>
              {Item.name}
            </h2>
            <Divider />
            <h2>
              <span className="blue"> Subject : </span>
              {Item.subject}
            </h2>
            <Divider />
            <h2>
              <span className="blue"> Content : </span>
              <span
                className="p"
                //style={{ direction: isArabic(Item.message) ? "rtl" : "ltr" }}
              >
                {" "}
                {Item.message}{" "}
              </span>
            </h2>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SendMail;
