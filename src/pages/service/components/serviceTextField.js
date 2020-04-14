import React from 'react';
import { Box, FormControl } from '@material-ui/core';
import { CssTextField } from '../../../globalStyle';

const ServiceTextField = ({
  label = '',
  name = '',
  placeholder = '',
  required = false,
  value = '',
  error = '',
  onChange,
  inputProps,
  multiline = false,
}) => {
  return (
    <Box margin='20px 0'>
      <Box margin='10px 0' color='#33333e'>
        {label}
      </Box>
      <FormControl fullWidth>
        <CssTextField
          variant='outlined'
          required={required}
          name={name}
          placeholder={placeholder}
          multiline={multiline}
          rows={multiline ? '4' : '1'}
          value={value}
          // error={touched.name && name === ''}
          onChange={(e) => onChange(e.target.name, e.target.value)}
          InputProps={{ endAdornment: inputProps }}
        />
      </FormControl>
    </Box>
  );
};

export default ServiceTextField;
