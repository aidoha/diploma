import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Box, InputAdornment, Button } from '@material-ui/core';
import withCurrentUser from '../../../hoc/currentUser';
import { InputField } from '../../../components';
import ServiceSelect from './serviceSelect';
import DialogBusiness from './businessDialog';
import {
  handleServiceName,
  handleSubcategories,
  handleServices,
  handleDescription,
  handleDuration,
  handlePrice,
  handleSubcategoryId,
  handleServiceId,
} from '../../../redux/service/actions';
import {
  handleErrorStatus,
  handleSuccessStatus,
} from '../../../redux/statuses/actions';
import {
  GET_BUSINESS_SUBCATEGORIES_UNDER_CATEGORY,
  GET_BUSINESS_SERVICES_UNDER_SUBCATEGORY,
  CREATE_COMPANY_SERVICE,
  UPDATE_COMPANY_SERVICE,
  GET_COMPANY_SERVICE,
} from '../queries';
import { routes } from '../../../constants';
import { useStyles } from '../style';
import { errors, succeses } from '../../../constants/statuses';

const ServiceForm = (props) => {
  const businessCategoryID =
    props &&
    props.currentUser &&
    props.currentUser[0] &&
    props.currentUser[0].businessCompanyCategoryID;
  const businessCompanyID =
    props &&
    props.currentUser &&
    props.currentUser[0] &&
    props.currentUser[0].businessCompanyID;
  const classes = useStyles();
  const { slug, id } = useParams();
  const [dialogBusiness, setDialogBusiness] = useState(false);
  const serviceState = useSelector((state) => state.service);
  const {
    name,
    subcategories,
    services,
    description,
    duration,
    price,
    business_ids,
  } = serviceState;
  const dispatch = useDispatch();
  const { error: subcategoryError, data: subcategoryData } = useQuery(
    GET_BUSINESS_SUBCATEGORIES_UNDER_CATEGORY,
    {
      variables: { businessCategoryID },
    }
  );
  const { error: servicesError, data: servicesData } = useQuery(
    GET_BUSINESS_SERVICES_UNDER_SUBCATEGORY,
    {
      variables: { subCategoryID: business_ids.subcategory },
    }
  );
  const { data: serviceData } = useQuery(GET_COMPANY_SERVICE, {
    variables: { companyServiceID: id },
    skip: slug === 'add',
  });

  const [createCompanyService] = useMutation(CREATE_COMPANY_SERVICE);
  const [updateCompanyService] = useMutation(UPDATE_COMPANY_SERVICE);

  const onChangeTextField = (name, value) => {
    switch (name) {
      case 'service-name':
        dispatch(handleServiceName(value));
        break;
      case 'service-description':
        dispatch(handleDescription(value));
        break;
      case 'service-duration':
        dispatch(handleDuration(value));
        break;
      case 'service-price':
        dispatch(handlePrice(value));
        break;
      default:
        return null;
    }
  };

  const handleDialogBusiness = () => {
    setDialogBusiness(!dialogBusiness);
  };

  const onChangeSubcategories = (e) => {
    const { value } = e.target;
    dispatch(handleSubcategoryId(value));
  };

  const onChangeServices = (e) => {
    const { value } = e.target;
    dispatch(handleServiceId(value));
  };

  const redirectToCompany = () => {
    setTimeout(() => {
      window.location.href = `${window.location.protocol}//${
        window.location.hostname
      }${window.location.port ? `:${window.location.port}` : ''}${
        routes.company
      }`;
    }, 1000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      companyServiceName: name,
      companyServiceDuration: duration,
      companyServicePrice: price,
      businessServiceID: business_ids.service,
      businessCompanyID,
    };

    if (!name || !duration || !price || !business_ids.service) {
      dispatch(handleErrorStatus({ value: true, message: errors.general }));
    } else {
      if (slug === 'add') {
        createCompanyService({ variables: obj })
          .then((res) => {
            if (res.data) {
              dispatch(
                handleSuccessStatus({
                  value: true,
                  message: succeses.service.add,
                })
              );
              redirectToCompany();
            }
          })
          .catch(() =>
            dispatch(
              handleErrorStatus({ value: true, message: errors.general })
            )
          );
      } else if (slug === 'edit') {
        obj.companyServiceID = serviceData?.getCompanyService?.companyServiceID;
        updateCompanyService({ variables: obj })
          .then((res) => {
            if (res.data) {
              dispatch(
                handleSuccessStatus({
                  value: true,
                  message: succeses.service.edit,
                })
              );
              redirectToCompany();
            }
          })
          .catch(() =>
            dispatch(
              handleErrorStatus({ value: true, message: errors.general })
            )
          );
      }
    }
  };

  useEffect(() => {
    dispatch(
      handleSubcategories(
        subcategoryData?.getBusinessSubCategoriesUnderCategory
          ?.businessSubCategories
      )
    );
  }, [subcategoryData, dispatch]);

  useEffect(() => {
    dispatch(
      handleServices(
        servicesData?.getBusinessServicesUnderSubCategory?.businessServices
      )
    );
  }, [servicesData, business_ids.subcategory, dispatch]);

  useEffect(() => {
    if (!serviceData) {
      return;
    }
    if (slug === 'edit') {
      const newServiceData = serviceData.getCompanyService;
      const {
        companyServiceName,
        companyServiceDuration,
        companyServicePrice,
      } = newServiceData;
      dispatch(handleServiceName(companyServiceName));
      dispatch(handleDuration(companyServiceDuration));
      dispatch(handlePrice(companyServicePrice));
    }
  }, [serviceData, slug, dispatch]);

  if (servicesError || subcategoryError) {
    return <div />;
  }

  return (
    <form onSubmit={onSubmit} style={{ width: '100%' }}>
      <Box>
        <Box>
          <InputField
            label='Название услуги*'
            name='service-name'
            placeholder='Например, Моя услуга'
            value={name}
            onChange={onChangeTextField}
          />
          <ServiceSelect
            label='Категория услуги*'
            name='service-subcategory'
            options={subcategories}
            value={business_ids.subcategory}
            onChange={onChangeSubcategories}
          />
          <ServiceSelect
            label='Услуга*'
            name='service'
            options={services}
            value={business_ids.service}
            onChange={onChangeServices}
          />
          <InputField
            label='Описание услуги'
            name='service-description'
            placeholder='Добавьте важную и полезную информацию о вашей услуге'
            multiline
            value={description}
            onChange={onChangeTextField}
          />
          <InputField
            label='Продолжительность услуги*'
            name='service-duration'
            placeholder='Например, 50 мин'
            value={duration}
            onChange={onChangeTextField}
            inputProps={<InputAdornment position='end'>мин</InputAdornment>}
          />
          <InputField
            type='number'
            label='Стоимость услуги*'
            name='service-price'
            placeholder='Например, 2000 ₸'
            value={price}
            onChange={onChangeTextField}
            inputProps={<InputAdornment position='end'>₸</InputAdornment>}
          />
        </Box>
        <Button
          variant='contained'
          size='large'
          type='submit'
          className={classes.btn_save_service}
        >
          Сохранить
        </Button>

        {slug === 'add' && (
          <Box marginTop='50px'>
            <Box fontSize='16px' color='#999' margin='10px 0'>
              Вы не нашли свою услугу в списке?
            </Box>
            <Button
              variant='contained'
              size='large'
              className={classes.btn_save_service}
              onClick={handleDialogBusiness}
            >
              Создать свою услугу
            </Button>
          </Box>
        )}
        <DialogBusiness
          state={{ name, business_ids, subcategories }}
          dialogBusiness={dialogBusiness}
          handleDialogBusiness={handleDialogBusiness}
          redirectToCompany={redirectToCompany}
        />
      </Box>
    </form>
  );
};

export default withCurrentUser(ServiceForm);
