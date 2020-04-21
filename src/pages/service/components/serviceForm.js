import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Box, InputAdornment, Button } from '@material-ui/core';
import ServiceTextField from './serviceTextField';
import ServiceSelect from './serviceSelect';
import {
  handleName,
  handleSubcategories,
  handleServices,
  handleDescription,
  handleDuration,
  handlePrice,
  handleSubcategoryId,
  handleServiceId,
  handleServiceError,
  handleServiceSaveSuccess,
  handleServiceEditSuccess,
} from '../../../redux';
import {
  GET_BUSINESS_SUBCATEGORIES_UNDER_CATEGORY,
  GET_BUSINESS_SERVICES_UNDER_SUBCATEGORY,
  CREATE_COMPANY_SERVICE,
  UPDATE_COMPANY_SERVICE,
  GET_COMPANY_SERVICE,
} from '../queries';
import { routes } from '../../../constants';
import { useStyles } from '../style';

const ServiceForm = () => {
  const classes = useStyles();
  const { slug, id } = useParams();
  const { push } = useHistory();
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
      variables: { businessCategoryID: 4 },
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

  const redirectToCompany = () => {
    setTimeout(() => {
      push(routes.company);
      window.location.reload();
    }, 1000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      companyServiceName: name,
      companyServiceDuration: duration,
      companyServicePrice: price,
      businessServiceID: business_ids.service,
      businessCompanyID: 6,
    };

    if (!name || !duration || !price || !business_ids.service) {
      dispatch(handleServiceError(true));
    } else {
      if (slug === 'add') {
        createCompanyService({ variables: obj })
          .then((res) => {
            if (res.data) {
              dispatch(handleServiceSaveSuccess(true));
              redirectToCompany();
            }
          })
          .catch(() => dispatch(handleServiceError(true)));
      } else if (slug === 'edit') {
        obj.companyServiceID = serviceData?.getCompanyService?.companyServiceID;
        updateCompanyService({ variables: obj })
          .then((res) => {
            if (res.data) {
              dispatch(handleServiceEditSuccess(true));
              redirectToCompany();
            }
          })
          .catch(() => dispatch(handleServiceError(true)));
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
  }, [subcategoryData]);

  useEffect(() => {
    dispatch(
      handleServices(
        servicesData?.getBusinessServicesUnderSubCategory?.businessServices
      )
    );
  }, [servicesData, business_ids.subcategory]);

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
      dispatch(handleName(companyServiceName));
      dispatch(handleDuration(companyServiceDuration));
      dispatch(handlePrice(companyServicePrice));
    }
  }, [serviceData, slug]);

  if (servicesError || subcategoryError) {
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
