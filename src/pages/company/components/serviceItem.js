import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
} from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { routes } from '../../../constants';
import { handleDeleteCompanyService } from '../../../redux/company/actions';
import {
  handleErrorStatus,
  handleSuccessStatus,
} from '../../../redux/statuses/actions';
import { DELETE_COMPANY_SERVICE } from '../queries';
import { errors, succeses } from '../../../constants/statuses';
import { useStyles } from '../style';

const ServiceItem = ({ item }) => {
  const { companyServiceName, companyServiceID } = item;
  const classes = useStyles();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const [deleteCompanyService] = useMutation(DELETE_COMPANY_SERVICE);
  const [confirmModal, setConfirmModal] = useState(false);

  const handleConfirmModal = () => {
    setConfirmModal(!confirmModal);
  };

  const redirectToEditService = () => {
    push(`${routes.service.edit}/${companyServiceID}`);
  };

  const deleteService = () => {
    deleteCompanyService({ variables: { companyServiceID } })
      .then((res) => {
        if (res.data) {
          dispatch(handleDeleteCompanyService(item));
          dispatch(
            handleSuccessStatus({
              value: true,
              message: succeses.service.delete,
            })
          );
        }
      })
      .catch(() =>
        dispatch(handleErrorStatus({ value: true, message: errors.general }))
      );
  };

  return (
    <Grid
      container
      justify='space-between'
      alignItems='center'
      item
      lg={3}
      md={3}
      xs={12}
      className={classes.service_item}
    >
      <div
        className={classes.service_item_name}
        onClick={redirectToEditService}
      >
        {companyServiceName}
      </div>
      <div>
        <Grid container>
          <Edit
            color='action'
            className={classes.service_item_actions}
            onClick={redirectToEditService}
          />
          <Delete
            color='action'
            className={classes.service_item_actions}
            onClick={handleConfirmModal}
          />
        </Grid>
      </div>
      <Dialog open={confirmModal} onClose={handleConfirmModal}>
        <DialogTitle>
          Вы действительно хотите удалить {companyServiceName}?
        </DialogTitle>
        <DialogActions>
          <Button color='default' onClick={handleConfirmModal}>
            Отменить
          </Button>
          <Button color='primary' onClick={deleteService}>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default ServiceItem;
