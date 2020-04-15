import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { Box, InputAdornment, Button, IconButton } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import ServiceTextField from './serviceTextField';
import ServiceSelect from './serviceSelect';
import {
  handleName,
  handleSubcategory,
  handleService,
  handleDescription,
  handleDuration,
  handlePrice,
} from '../../../redux';
import { GET_BUSINESS_SUBCATEGORIES_UNDER_CATEGORY } from '../queries';
import { useStyles } from '../style';

const ServiceForm = () => {
  const { slug } = useParams();
  const classes = useStyles();
  const serviceState = useSelector((state) => state.service);
  const {
    name,
    subcategory,
    service,
    description,
    duration,
    price,
  } = serviceState;
  const dispatch = useDispatch();
  const {
    loading: subcategoryLoading,
    error: subcategoryError,
    data: subcategoryData,
  } = useQuery(GET_BUSINESS_SUBCATEGORIES_UNDER_CATEGORY, {
    variables: { businessCategoryID: 4 },
  });
  console.log(subcategoryError);
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

  return (
    <form>
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
            placeholder='Например, Моя компания'
            required
            value={name}
            onChange={onChangeTextField}
            inputProps={
              <InputAdornment position='end'>
                <IconButton>
                  <Clear />
                </IconButton>
              </InputAdornment>
            }
          />
          <ServiceSelect
            label='Категория услуги*'
            name='service-subcategory'
            placeholder='Выберите категорию'
            required
          />
          <ServiceSelect
            label='Услуга*'
            name='service'
            placeholder='Выберите услугу'
            required
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
            required
            value={duration}
            onChange={onChangeTextField}
            inputProps={<InputAdornment position='end'>мин</InputAdornment>}
          />
          <ServiceTextField
            type='number'
            label='Стоимость услуги*'
            name='service-price'
            placeholder='Например, 2000 ₸'
            required
            value={price}
            onChange={onChangeTextField}
            inputProps={<InputAdornment position='end'>₸</InputAdornment>}
          />
        </Box>
        <Button
          variant='contained'
          size='large'
          className={classes.btn_save_service}
        >
          Сохранить
        </Button>
      </Box>
    </form>
  );
};

export default ServiceForm;
