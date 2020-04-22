import React from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Box,
  FormControl,
  Checkbox,
} from '@material-ui/core';
import { CREATE_BUSINESS_SERVICE } from '../queries';
import {
  handleServiceName,
  handleSubcategoryIds,
} from '../../../redux/service/actions';
import { handleServiceSaveSuccess, handleServiceError } from '../../../redux';

const BusinessDialog = ({
  dialogBusiness,
  handleDialogBusiness,
  state,
  redirectToCompany,
}) => {
  const { name, business_ids, subcategories } = state;
  const dispatch = useDispatch();
  const [createBusinessService] = useMutation(CREATE_BUSINESS_SERVICE);

  const createBusinessServiceHandler = () => {
    if (!name || !business_ids.subcategories) {
      dispatch(handleServiceError(true));
    } else {
      const obj = {
        businessServiceName: name,
        businessServiceSubCategories: business_ids.subcategories,
      };
      createBusinessService({ variables: obj })
        .then((res) => {
          if (res.data) {
            dispatch(handleServiceSaveSuccess(true));
            redirectToCompany();
          }
        })
        .catch(() => dispatch(handleServiceError(true)));
    }
  };

  return (
    <Dialog open={dialogBusiness} onClose={handleDialogBusiness} fullWidth>
      <DialogTitle>Новая услуга</DialogTitle>
      <DialogContent>
        <Box margin='10px 0' color='#33333e'>
          Название услуги*
        </Box>
        <TextField
          fullWidth
          variant='outlined'
          value={name}
          onChange={(e) => dispatch(handleServiceName(e.target.value))}
        />
        <Box margin='25px 0'>
          <Box margin='10px 0' color='#33333e'>
            Категории услуг*
          </Box>
          <FormControl variant='outlined' fullWidth>
            <Select
              value={business_ids.subcategories}
              fullWidth
              multiple
              onChange={(e) => dispatch(handleSubcategoryIds(e.target.value))}
            >
              {subcategories.map((item) => {
                const { businessSubCategoryName, businessSubCategoryID } = item;
                return (
                  <MenuItem
                    key={businessSubCategoryID}
                    value={businessSubCategoryID}
                  >
                    {/* <Checkbox
                      checked={
                        business_ids.subcategories.indexOf(
                          businessSubCategoryID
                        ) > -1
                      }
                    /> */}
                    {businessSubCategoryName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogBusiness} color='primary'>
          Отменить
        </Button>
        <Button onClick={createBusinessServiceHandler} color='primary'>
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BusinessDialog;
