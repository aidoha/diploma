import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';

const ServiceSelect = ({
  label = '',
  name = '',
  placeholder = '',
  value = '',
  error = '',
  onChange,
  inputProps = {},
}) => {
  return (
    <Box margin='20px 0'>
      <Box margin='10px 0' color='#33333e'>
        {label}
      </Box>
      <FormControl variant='outlined' fullWidth>
        <InputLabel>{placeholder}</InputLabel>
        <Select name={name} required>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ServiceSelect;
