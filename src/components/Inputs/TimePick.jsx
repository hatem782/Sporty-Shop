import React from "react";
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
