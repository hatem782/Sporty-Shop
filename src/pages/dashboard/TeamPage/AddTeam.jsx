import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import CloseBtn from "../../../components/Buttons/CloseBtn";

import { AddTm } from "../../../services/TeamServices";
import ImageUp from "../../../components/Buttons/ImageUp";

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
    "& *": {
      margin: "0px 20px !important",
    },
  },
}));

const AddTeam = (props) => {
  const { dialog, handleClose } = props;
  const { active, title } = dialog;
  const classes = useStyles();

  const [Item, SetItem] = useState({
    name_en: "",
    name_ar: "",
    description_en: "",
    description_ar: "",
    img: "",
    deleted: false,
    show: true,
    ar: true,
    en: true,
  });

  const GetInputVal = (e) => {
    SetItem({ ...Item, [e.target.name]: e.target.value });
  };
  const GetCheckVal = (e) => {
    SetItem({ ...Item, [e.target.name]: e.target.checked });
  };

  const Submit = () => {
    AddTm(Item);
    handleClose();
  };

  useEffect(() => {
    console.log(Item);
  }, [Item]);

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
            <TextField
              fullWidth
              className={classes.textField}
              label="Name In English"
              name="name_en"
              value={Item.name_en}
              onChange={GetInputVal}
            />
            <TextField
              fullWidth
              className={classes.textField}
              label="Name In Arabe"
              name="name_ar"
              value={Item.name_ar}
              onChange={GetInputVal}
            />
            <TextField
              fullWidth
              multiline
              minRows={4}
              className={classes.textField}
              label="Position In English"
              name="description_en"
              value={Item.description_en}
              onChange={GetInputVal}
            />
            <TextField
              fullWidth
              multiline
              minRows={4}
              className={classes.textField}
              label="Position In Arabe"
              name="description_ar"
              value={Item.description_ar}
              onChange={GetInputVal}
            />
            <ImageUp label="img" onChange={GetInputVal}>
              Personal Image
            </ImageUp>

            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Item.show}
                    name="show"
                    onChange={GetCheckVal}
                  />
                }
                label="show"
              />
            </Stack>

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
                onClick={Submit}
              >
                Add
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddTeam;
