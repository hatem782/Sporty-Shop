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
import DatePick from "../../../components/Inputs/DatePick";

import { AddMem } from "../../../services/ForMemServices";
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

const AddMemo = (props) => {
  const { dialog, handleClose } = props;
  const { active, title } = dialog;
  const classes = useStyles();

  const [Item, SetItem] = useState({
    title_en: "",
    title_ar: "",
    description_en: "",
    description_ar: "",
    img: "",
    //date: new Date().toString(),
    deleted: false,
    show: true,
    inhome: false,
    ar: false,
    en: false,
  });

  const GetInputVal = (e) => {
    SetItem({ ...Item, [e.target.name]: e.target.value });
  };
  const GetCheckVal = (e) => {
    SetItem({ ...Item, [e.target.name]: e.target.checked });
  };

  const Submit = () => {
    AddMem(Item);
    handleClose();
  };

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
            <TextField
              fullWidth
              className={classes.textField}
              label="title_en"
              name="title_en"
              value={Item.title_en}
              onChange={GetInputVal}
            />
            <TextField
              fullWidth
              className={classes.textField}
              label="title_ar"
              name="title_ar"
              value={Item.title_ar}
              onChange={GetInputVal}
            />
            {/* <DatePick
              fullWidth
              className={classes.textField}
              label="date"
              name="date"
              value={Item.date}
              onChange={GetInputVal}
            /> */}
            <TextField
              fullWidth
              multiline
              minRows={4}
              className={classes.textField}
              label="description_en"
              name="description_en"
              value={Item.description_en}
              onChange={GetInputVal}
            />
            <TextField
              fullWidth
              multiline
              minRows={4}
              className={classes.textField}
              label="description_ar"
              name="description_ar"
              value={Item.description_ar}
              onChange={GetInputVal}
            />
            <ImageUp label="img" onChange={GetInputVal}>
              Add image
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Item.inhome}
                    name="inhome"
                    onChange={GetCheckVal}
                  />
                }
                label="in home"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Item.ar}
                    name="ar"
                    onChange={GetCheckVal}
                  />
                }
                label="AR"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Item.en}
                    name="en"
                    onChange={GetCheckVal}
                  />
                }
                label="EN"
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

export default AddMemo;
