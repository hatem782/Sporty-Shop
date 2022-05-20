import React, { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import CloseBtn from "../../../components/Buttons/CloseBtn";

import TeamCard from "../../../components/Cards/TeamCard";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "15px 20px",
    backgroundColor: "rgb(15,14,12)",
    width: "450px",
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

const ShowTeam = (props) => {
  const { dialog, handleClose, item } = props;
  const { active, type, value, title } = dialog;
  const [lang, setlang] = useState(false);
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
          {value.name_en}
          <CloseBtn onClick={handleClose} />
        </DialogTitle>

        <DialogContent className={classes.card} dividers>
          <TeamCard lang={lang} Item={value} />
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

export default ShowTeam;
