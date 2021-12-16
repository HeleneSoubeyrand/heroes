// import { useState } from "react";

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const SelectInput = (props) => {  
  return (
    <TextField
        id="outlined-select-currency"
        select
        label={props.label}
        value={props.value}
        onChange={props.onChange}
    >
        {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
            {option.label}
        </MenuItem>
        ))}
    </TextField>
    )
}

export default SelectInput