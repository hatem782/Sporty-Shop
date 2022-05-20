import { useEffect } from "react";
import { firestore, auth, firebase } from "./config/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

function App() {
  const test = firestore.collection("test");
  const testfcn = async () => {
    await test.add({ message: "test" });
  };
  const [messages] = useCollectionData(test, { idField: "message" });

  useEffect(() => {
    testfcn();
  }, []);

  return (
    <div className="App">
      <h1>hello world</h1>
      {messages &&
        messages.map((val, key) => {
          return <h2 key={key}>{val.message}</h2>;
        })}
    </div>
  );
}

export default App;

/*


import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

export default function MaterialUIPickers({ label, name, onChange, value }) {
  const handleChange = (newValue) => {
    let e = { target: { value: newValue.$d.toString(), name: name } };
    console.log(e);
    onChange(e);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Time"
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            style={{ margin: "10px 0px", width: "100%" }}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}

*/
