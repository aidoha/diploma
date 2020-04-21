import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
} from '@material-ui/core';
import {
  handleServiceName,
  handleSubcategories,
  handleSubcategoryIds,
} from '../../../redux/service/actions';

const BusinessDialog = ({ dialogBusiness, handleDialogBusiness, state }) => {
  const { name, business_ids, subcategories } = state;
  const dispatch = useDispatch();
  console.log('state', state);
  return (
    <Dialog open={dialogBusiness} onClose={handleDialogBusiness} fullWidth>
      <DialogTitle>Новая услуга</DialogTitle>
      <DialogContent>
        <TextField
          label='Название услуги'
          fullWidth
          value={name}
          onChange={(e) => dispatch(handleServiceName(e.target.value))}
        />
        <Select
          value={business_ids.subcategories}
          fullWidth
          multiple
          // onChange={(e) => dispatch(e)}
        >
          {subcategories.map((item) => {
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
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogBusiness} color='primary'>
          Отменить
        </Button>
        <Button onClick={handleDialogBusiness} color='primary'>
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BusinessDialog;
