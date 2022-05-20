import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import DisablePerBtn from "../../../components/Buttons/DisablePerBtn";
import SendMailBtn from "../../../components/Buttons/SendMailBtn";
import DeleteBtn from "../../../components/Buttons/DeleteBtn";

// import AddBlog from "./AddBlog";
// import ShowBlogCard from "./ShowBlogCard";
import BlockContact from "./BlockContact";
import SendMail from "./SendMail";

import Avatar from "@mui/material/Avatar";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { membersStore } from "../../../services/MembersServices";
import { DateParser } from "../../../functions/DateTimeFn";

function GestContacts() {
  // type: add,delete,update ; value:null or object
  const [dialog, setdialog] = useState({
    active: false,
    type: "",
    value: null,
    title: "",
  });
  const [rows] = useCollectionData(membersStore, { idField: "id" });
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
            <TableCell>Member</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Join Date</TableCell>
            <TableCell>Blocked</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows ? rows : []).map((row, key) => (
            <TableRow key={row.id}>
              <TableCell>
                <Avatar alt={row.name} src={row.img} />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{DateParser(row.joinDate)}</TableCell>
              <TableCell>{row.blocked ? "Yes" : "No"}</TableCell>

              <TableCell>
                <Stack justifyContent="center" direction="row">
                  <SendMailBtn
                    onClick={() => {
                      openDial("sendMail", row, `Send Mail To : ${row.name}`);
                    }}
                  />
                  {/* <ShowISBtn url={`${rsu}blog/${row.id}`} /> */}
                  <DisablePerBtn
                    onClick={() => {
                      openDial("block", row, `modify item : ${row.name}`);
                    }}
                  />
                  <DeleteBtn
                    onClick={() => {
                      openDial("delete", row, `delete item : ${row.title_en}`);
                    }}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {dialog.type === "block" ? (
        <BlockContact dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "sendMail" ? (
        <SendMail dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {/* 
      {dialog.type === "show" && dialog.value !== null ? (
        <ShowBlogCard dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "delete" ? (
        <BlockContact dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )} */}
    </Paper>
  );
}

export default GestContacts;
