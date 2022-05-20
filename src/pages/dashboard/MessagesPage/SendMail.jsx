import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import SnackBar from "../../../components/Dialogs/SnackBar";
import CloseBtn from "../../../components/Buttons/CloseBtn";
import { SendMailServ } from "../../../services/MailingService";

//import { AddGal } from "../../../services/GalleryServices";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "20px",
  },
  title: {
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "1.5em",
  },
  textField: {
    margin: "10px 0px !important",
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

const SendMail = (props) => {
  const { dialog, handleClose } = props;
  const { active, value, title } = dialog;
  const classes = useStyles();
  const [openSnack, setOpenSnack] = useState({
    open: false,
    error: false,
    message: "",
  });

  const [Item, SetItem] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const [sending, setSending] = useState(false);

  const closeSnack = () => {
    setOpenSnack({ ...openSnack, open: false });
    handleClose();
  };

  useEffect(() => {
    SetItem({ ...Item, to: value.email });
  }, [value]);

  const GetInputVal = (e) => {
    SetItem({ ...Item, [e.target.name]: e.target.value });
  };

  const Submit = async () => {
    setSending(true);
    const data = await SendMailServ(Item);
    console.log(data);
    setOpenSnack({
      open: true,
      error: !data.sent,
      message: data.msg,
    });
    //console.log(Item);
  };

  // useEffect(() => {
  //   console.log(Item);
  // }, [Item]);

  return (
    <div>
      <SnackBar {...openSnack} handleClose={closeSnack} />
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
            <TextField
              fullWidth
              disabled={true}
              className={classes.textField}
              label="to"
              name="to"
              value={Item.to}
              onChange={GetInputVal}
            />
            <TextField
              fullWidth
              className={classes.textField}
              label="subject"
              name="subject"
              value={Item.subject}
              onChange={GetInputVal}
            />
            <TextField
              fullWidth
              multiline
              minRows={6}
              className={classes.textField}
              label="text"
              name="text"
              value={Item.text}
              onChange={GetInputVal}
            />
            <div className={classes.buttons}>
              <Button
                type="submit"
                disabled={sending}
                variant="contained"
                color="primary"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={sending}
                variant="contained"
                color="primary"
                onClick={Submit}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SendMail;
