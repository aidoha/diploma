import React from 'react';
import { Box, FormControl, MenuItem, Select } from '@material-ui/core';

const ServiceSelect = ({
  label = '',
  name = '',
  options = [],
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
        <Select
          name={name}
          required
          value={value}
          onChange={(e) => onChange(e)}
        >
          {name === 'service-subcategory' &&
            options.map((item) => {
              const { businessSubCategoryName, businessSubCategoryID } = item;
              return (
                <MenuItem
                  key={businessSubCategoryID}
                  value={businessSubCategoryID}
                >
                  {businessSubCategoryName}
                </MenuItem>
              );
            })}
          {name === 'service' &&
            options.map((item) => {
              const { businessServiceID, businessServiceName } = item;
              return (
                <MenuItem key={businessServiceID} value={businessServiceID}>
                  {businessServiceName}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ServiceSelect;
