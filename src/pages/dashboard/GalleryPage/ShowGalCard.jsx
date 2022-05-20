import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import CloseBtn from "../../../components/Buttons/CloseBtn";

import GalleryItem from "../../../components/Cards/GalleryCard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "20px",
    backgroundColor: "rgb(15,14,12)",
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
    "& *": {
      margin: "0px 20px !important",
    },
  },
}));

const ShowGalCard = (props) => {
  const { dialog, handleClose, item } = props;
  const { active, type, value, title } = dialog;
  const [lang, setlang] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    console.log(dialog);
  }, [dialog]);

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

        <DialogContent className={classes.card} dividers>
          <GalleryItem lang={lang} gal={value} />
          <div className={classes.buttons}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={() => {
                setlang(true);
              }}
            >
              En
            </Button>

            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={() => {
                setlang(false);
              }}
            >
              Ar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShowGalCard;
