import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import ModifBtn from "../../../components/Buttons/ModifBtn";
import ShowBtn from "../../../components/Buttons/ShowBtn";
import DeleteBtn from "../../../components/Buttons/DeleteBtn";
import ShowISBtn from "../../../components/Buttons/ShowISBtn";

import { Button } from "@mui/material";

import AddEvent from "./AddEvent";
import ShowEventCard from "./ShowEventCard";
import UpdateEvent from "./UpdateEvent";
import DeleteEvent from "./DeleteEvent";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { eventsShow } from "../../../services/EventsServices";
import { DateParser, TimeParser } from "../../../functions/DateTimeFn";
const rsu = process.env.REACT_APP_SITE_URL;

function GestEvents() {
  // type: add,delete,update ; value:null or object
  const [dialog, setdialog] = useState({
    active: false,
    type: "",
    value: null,
    title: "",
  });
  const [rows] = useCollectionData(eventsShow, { idField: "id" });
  useEffect(() => {
    console.log(rows);
  }, [rows]);

  useEffect(() => {
    console.log(dialog);
  }, [dialog]);

  const openDial = (type, value, title) => {
    setdialog({ active: true, type: type, value: value, title: title });
  };

  const closeDial = () => {
    setdialog({ active: false, type: "", value: null, title: "" });
  };

  return (
    <Paper sx={{ p: 2 }}>
      <h1>
        Events Page{" "}
        <Button
          variant="outlined"
          endIcon={<AddIcon />}
          onClick={() => openDial("add", null, "Add to Event")}
        >
          Add To Events
        </Button>
      </h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>location</TableCell>
            <TableCell>date</TableCell>
            <TableCell>time</TableCell>
            <TableCell>show</TableCell>
            <TableCell>show in home</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows ? rows : []).map((row, key) => (
            <TableRow key={row.id}>
              <TableCell>{row.title_ar}</TableCell>
              <TableCell>{row.location_en}</TableCell>
              <TableCell>{DateParser(row.date)}</TableCell>
              <TableCell>{TimeParser(row.time)}</TableCell>

              <TableCell>{row.show ? "YES" : "NO"}</TableCell>
              <TableCell>{row.inhome ? "YES" : "NO"}</TableCell>
              <TableCell>
                <Stack justifyContent="center" direction="row">
                  <ShowBtn
                    onClick={() => {
                      openDial("show", row, row.title_ar);
                    }}
                  />
                  <ModifBtn
                    onClick={() => {
                      openDial("update", row, `modify item : ${row.title_ar}`);
                    }}
                  />
                  <DeleteBtn
                    onClick={() => {
                      openDial("delete", row, `delete item : ${row.title_ar}`);
                    }}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {dialog.type === "add" ? (
        <AddEvent dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "update" ? (
        <UpdateEvent dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "show" && dialog.value !== null ? (
        <ShowEventCard dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "delete" ? (
        <DeleteEvent dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}
    </Paper>
  );
}

export default GestEvents;
