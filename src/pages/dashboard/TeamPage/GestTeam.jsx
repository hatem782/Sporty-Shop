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

import AddTeam from "./AddTeam";
import ShowTeam from "./ShowTeam";
import UpdateTeam from "./UpdateTeam";
import DeleteTeam from "./DeleteTeam";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { teamShow } from "../../../services/TeamServices";
const rsu = process.env.REACT_APP_SITE_URL;

function GestTeam() {
  // type: add,delete,update ; value:null or object
  const [dialog, setdialog] = useState({
    active: false,
    type: "",
    value: null,
    title: "",
  });
  const [rows] = useCollectionData(teamShow, { idField: "id" });
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
        Gallery Page{" "}
        <Button
          variant="outlined"
          endIcon={<AddIcon />}
          onClick={() => openDial("add", null, "Add to Team")}
        >
          Add To Team
        </Button>
      </h1>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name EN</TableCell>
            <TableCell>Name AR</TableCell>
            <TableCell>Position EN</TableCell>
            <TableCell>Position AR</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rows ? rows : []).map((row, key) => (
            <TableRow key={row.id}>
              <TableCell>{row.name_en}</TableCell>
              <TableCell>{row.name_ar}</TableCell>
              <TableCell>{row.description_en}</TableCell>
              <TableCell>{row.description_ar}</TableCell>
              <TableCell>
                <Stack justifyContent="center" direction="row">
                  <ShowBtn
                    onClick={() => {
                      openDial("show", row, row.title);
                    }}
                  />
                  <ShowISBtn url={`${rsu}abouts`} />
                  <ModifBtn
                    onClick={() => {
                      openDial("update", row, `modify item : ${row.title}`);
                    }}
                  />
                  <DeleteBtn
                    onClick={() => {
                      openDial("delete", row, `delete item : ${row.title}`);
                    }}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {dialog.type === "add" ? (
        <AddTeam dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "update" ? (
        <UpdateTeam dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "show" && dialog.value !== null ? (
        <ShowTeam dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}

      {dialog.type === "delete" ? (
        <DeleteTeam dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}
    </Paper>
  );
}

export default GestTeam;
