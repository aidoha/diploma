import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Button, MenuItem } from '@material-ui/core';
import {
  handleCompanyName,
  handleCompanyId,
  handleBusinessCategory,
  handleSteps,
  handleBusinessCategories,
  handleAuthError,
  handleCompanySuccess,
} from '../../../../redux/auth/actions';
import {
  GET_BUSINESS_CATEGORIES,
  CREATE_BUSINESS_COMPANY,
} from '../../queries';
import { useStyles } from '../../style';
import { CssTextField } from '../../../../globalStyle';

const FirstStep = () => {
  const classes = useStyles();
  const signUpState = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const {
    companyName,
    businessCategory,
    businessCategoryId,
    categories,
    touched,
  } = signUpState;
  const { data, loading } = useQuery(GET_BUSINESS_CATEGORIES);
  const [createBusinessCompany] = useMutation(CREATE_BUSINESS_COMPANY);

  const onSubmit = (e) => {
    e.preventDefault();
    createBusinessCompany({
      variables: {
        businessCompanyName: companyName,
        businessCompanyCategoryID: businessCategoryId,
      },
    })
      .then((res) => {
        if (!res.data) {
          return;
        }
        dispatch(
          handleCompanyId(res.data.createBusinessCompany.businessCompanyID)
        );
        dispatch(handleCompanySuccess(true));
        dispatch(handleSteps());
      })
      .catch(() => dispatch(handleAuthError(true)));
  };

  const onChangeCompanyName = (value) => {
    dispatch(handleCompanyName(value));
  };

  const onChangeBusinessCategory = (value) => {
    const id = categories.find((item) => item.businessCategoryName === value)
      ?.businessCategoryID;
    dispatch(handleBusinessCategory(value, id));
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    dispatch(handleBusinessCategories(data.getBusinessCategories));
  }, [data, dispatch]);

  if (loading) {
    return <div />;
  }

  return (
    <form noValidate onSubmit={onSubmit}>
      <CssTextField
        variant='outlined'
        margin='normal'
        fullWidth
        label='Название компании'
        name='company'
        value={companyName}
        error={touched.companyName && companyName === ''}
        onBlur={(e) => onChangeCompanyName(e.target.value)}
        onChange={(e) => onChangeCompanyName(e.target.value)}
      />
      <CssTextField
        fullWidth
        select
        label='Категория бизнеса'
        variant='outlined'
        margin='normal'
        id='business-category'
        name='business-category'
        value={businessCategory}
        error={touched.businessCategory && businessCategory === ''}
        onChange={(e) => onChangeBusinessCategory(e.target.value)}
      >
        {categories.map((option) => {
          return (
            <MenuItem
              key={option.businessCategoryID}
              value={option.businessCategoryName}
            >
              {option.businessCategoryName}
            </MenuItem>
          );
        })}
      </CssTextField>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        size='large'
        className={classes.btn_auth}
        disabled={companyName === '' || businessCategory === ''}
      >
        Продолжить
      </Button>
    </form>
  );
};

export default FirstStep;
