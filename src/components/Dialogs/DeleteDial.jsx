import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import CloseBtn from "../../../components/Buttons/CloseBtn";

import { AddGal } from "../../../services/GalleryServices";

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
    margin: "10px 0px ",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& *": {
      margin: "0px 20px",
    },
  },
}));

const DeleteDial = (props) => {
  const { dialog, handleClose, deleted, delete_perma } = props;
  const { active, value, title } = dialog;
  const classes = useStyles();

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
          <div>
            <h1>Are you sure to delete {value.title} ???</h1>
            <div className={classes.buttons}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleClose}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={deleted}
              >
                Delete
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                onClick={delete_perma}
              >
                Delete Permanently !
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteDial;
