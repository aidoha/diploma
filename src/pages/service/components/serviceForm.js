import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Box, InputAdornment, Button } from '@material-ui/core';
import ServiceTextField from './serviceTextField';
import ServiceSelect from './serviceSelect';
import {
  handleName,
  handleSubcategory,
  handleService,
  handleDescription,
  handleDuration,
  handlePrice,
  handleSubcategoryId,
  handleServiceId,
  handleServiceError,
  handleServiceSuccess,
} from '../../../redux';
import {
  GET_BUSINESS_SUBCATEGORIES_UNDER_CATEGORY,
  GET_BUSINESS_SERVICES_UNDER_SUBCATEGORY,
  CREATE_COMPANY_SERVICE,
} from '../queries';
import { useStyles } from '../style';

const ServiceForm = () => {
  // const { slug } = useParams();
  const classes = useStyles();
  const { push } = useHistory();
  const serviceState = useSelector((state) => state.service);
  const {
    name,
    subcategories,
    services,
    description,
    duration,
    price,
    ids,
  } = serviceState;
  const dispatch = useDispatch();
  const {
    loading: subcategoryLoading,
    error: subcategoryError,
    data: subcategoryData,
  } = useQuery(GET_BUSINESS_SUBCATEGORIES_UNDER_CATEGORY, {
    variables: { businessCategoryID: 4 },
  });
  const {
    loading: serviceLoading,
    error: serviceError,
    data: serviceData,
  } = useQuery(GET_BUSINESS_SERVICES_UNDER_SUBCATEGORY, {
    variables: { subCategoryID: ids.subcategory },
  });
  const [createCompanyService] = useMutation(CREATE_COMPANY_SERVICE);

  const onChangeTextField = (name, value) => {
    switch (name) {
      case 'service-name':
        dispatch(handleName(value));
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

  const onChangeSubcategories = (e) => {
    const { value } = e.target;
    dispatch(handleSubcategoryId(value));
  };

  const onChangeServices = (e) => {
    const { value } = e.target;
    dispatch(handleServiceId(value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      companyServiceName: name,
      companyServiceDuration: duration,
      companyServicePrice: price,
      businessServiceID: ids.service,
      businessCompanyID: 5,
    };

    if (!name || !duration || !price || !ids.service) {
      dispatch(handleServiceError(true));
    } else {
      createCompanyService({ variables: obj })
        .then((res) => {
          if (res.data) {
            dispatch(handleServiceSuccess(true));
            setTimeout(() => {
              push('/company');
            }, 1000);
          }
        })
        .catch(() => dispatch(handleServiceError(true)));
    }
  };

  useEffect(() => {
    dispatch(
      handleSubcategory(
        subcategoryData?.getBusinessSubCategoriesUnderCategory
          ?.businessSubCategories
      )
    );
  }, [subcategoryData]);

  useEffect(() => {
    dispatch(
      handleService(
        serviceData?.getBusinessServicesUnderSubCategory?.businessServices
      )
    );
  }, [serviceData, ids.subcategory]);

  if (serviceError || subcategoryError) {
    return <div />;
  }

  return (
    <form onSubmit={onSubmit}>
      <Box
        marginTop='20px'
        border='1px solid #cbcbeb'
        borderRadius='12px'
        padding='25px'
      >
        <Box fontWeight='bold' fontSize='18px' marginBottom='10px'>
          Описание
        </Box>
        <Box fontWeight='lighter' fontSize='16px' color='#4a4a4a'>
          Информация о вашей услуге
        </Box>
        <Box margin='35px 0'>
          <ServiceTextField
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
            value={ids.subcategory}
            onChange={onChangeSubcategories}
          />
          <ServiceSelect
            label='Услуга*'
            name='service'
            options={services}
            value={ids.service}
            onChange={onChangeServices}
          />
          <ServiceTextField
            label='Описание услуги'
            name='service-description'
            placeholder='Добавьте важную и полезную информацию о вашей услуге'
            multiline
            value={description}
            onChange={onChangeTextField}
          />
          <ServiceTextField
            label='Продолжительность услуги*'
            name='service-duration'
            placeholder='Например, 50 мин'
            value={duration}
            onChange={onChangeTextField}
            inputProps={<InputAdornment position='end'>мин</InputAdornment>}
          />
          <ServiceTextField
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
      </Box>
    </form>
  );
};

export default ServiceForm;
