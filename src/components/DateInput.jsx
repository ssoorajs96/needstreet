import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const DateInput = ({ errorText, description, ...props }) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          {...props}
          format="DD-MM-YYYY"
          renderInput={(params) => (
            <TextField
              helperText={errorText ? errorText : null}
              {...props}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateInput;
