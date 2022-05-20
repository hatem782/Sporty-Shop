import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDayjs";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

export default function MaterialUIPickers({ value, label, name, onChange }) {
  const handleChange = (newValue) => {
    let e = { target: { value: newValue.$d.toString(), name: name } };
    console.log(e);
    onChange(e);
  };

  const fixParams = (params) => {
    let date = new Date(value);
    date = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    params.inputProps.value = date;
    return params;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={label}
        inputFormat="yyyy/mm/dd"
        value={new Date("2020-01-01T00:00:00")}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            style={{ margin: "10px 0px", width: "100%" }}
            {...fixParams(params)}
          />
        )}
      />
    </LocalizationProvider>
  );
}
