import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import SendMailBtn from "../../../components/Buttons/SendMailBtn";
import ReadMailBtn from "../../../components/Buttons/ReadMailBtn";
import DeleteBtn from "../../../components/Buttons/DeleteBtn";

import ReadMail from "./ReadMail";
import SendMail from "./SendMail";
import DeleteMessage from "./DeleteMessage";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { messagesStore } from "../../../services/MessagesServices";
import { DateParser } from "../../../functions/DateTimeFn";

function GestMessages() {
  // type: add,delete,update ; value:null or object
  const [dialog, setdialog] = useState({
    active: false,
    type: "",
    value: null,
    title: "",
  });
  const [rows] = useCollectionData(messagesStore, { idField: "id" });
  useEffect(() => {
    console.log(rows);
  }, [rows]);

  useEffect(() => {
    //console.log(dialog);
  }, [dialog]);

  const openDial = (type, value, title) => {
    setdialog({ active: true, type: type, value: value, title: title });
  };

  const closeDial = () => {
    setdialog({ active: false, type: "", value: null, title: "" });
  };

  return (
    <Paper sx={{ p: 2 }}>
      <h1>Contacts Page</h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Send Date</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows ? rows : []).map((row, key) => (
            <TableRow key={row.id}>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{DateParser(row.sendDate)}</TableCell>

              <TableCell>
                <Stack justifyContent="center" direction="row">
                  <ReadMailBtn
                    onClick={() => {
                      openDial(
                        "readMail",
                        row,
                        `Reading Mail From : ${row.name}`
                      );
                    }}
                  />
                  <SendMailBtn
                    onClick={() => {
                      openDial("sendMail", row, `Send Mail To : ${row.name}`);
                    }}
                  />
                  <DeleteBtn
                    onClick={() => {
                      openDial("delete", row, `delete Mail From : ${row.name}`);
                    }}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {dialog.type === "readMail" ? (
        <ReadMail dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "sendMail" ? (
        <SendMail dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "delete" ? (
        <DeleteMessage dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {/* 
      {dialog.type === "show" && dialog.value !== null ? (
        <ShowBlogCard dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

       */}
    </Paper>
  );
}

export default GestMessages;
