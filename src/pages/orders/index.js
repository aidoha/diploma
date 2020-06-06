import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { Grid, Box } from '@material-ui/core';
import { MainLayout, Loader, Statuses, NoServiceBlock } from '../../components';
import ServiceItem from './components/serviceItem';
import OrdersCalendar from './components/orders-calendar';
import withCurrentUser from '../../hoc/currentUser';
import withApollo from '../../hoc/withApollo';
import {
  handleCompanyServices,
  handleResetCompanyServices,
} from '../../redux/company/actions';
import { getOrderList } from '../../redux/order/actions';
import { GET_BUSINESS_COMPANY_SERVICES } from '../company/queries';
import {
  GET_BUSINESS_SERVICE_ORDERS,
  DELETE_BUSINESS_SERVICE_ORDER,
} from './queries';
import { useStyles } from './style';

const Orders = (props) => {
  const classes = useStyles();
  const { push } = useHistory();
  const { id: serviceID } = useParams();
  const businessCompanyID =
    props &&
    props.currentUser &&
    props.currentUser[0] &&
    props.currentUser[0].businessCompanyID;
  const dispatch = useDispatch();
  const companyState = useSelector((state) => state.company);
  const orderState = useSelector((state) => state.order);
  const { companyServices } = companyState;
  const { orderList } = orderState;

  const { data: ordersData, loading: ordersLoading } = useQuery(
    GET_BUSINESS_SERVICE_ORDERS,
    {
      variables: { businessServiceID: serviceID },
      skip: !serviceID,
    }
  );
  const {
    data: companyServicesData,
    loading: companyServicesLoading,
  } = useQuery(GET_BUSINESS_COMPANY_SERVICES, {
    variables: { businessCompanyID },
  });
  const [deleteBusinessOrder] = useMutation(DELETE_BUSINESS_SERVICE_ORDER);

  const services =
    companyServicesData?.getBusinessCompanyServices?.businessCompanyService;
  const orders = ordersData?.getBusinessServiceOrders?.businessServicesOrders;

  useEffect(() => {
    if (services) {
      dispatch(handleCompanyServices(services));
    } else {
      dispatch(handleResetCompanyServices());
    }

    return () => {
      dispatch(handleCompanyServices([]));
    };
  }, [services, dispatch]);

  useEffect(() => {
    if (orders) {
      dispatch(getOrderList(orders));
    }
  }, [orders, dispatch]);

  useEffect(() => {
    document.title = 'Заказы | Cactus';
  }, []);

  return (
    <MainLayout
      section='orders'
      // padding='100px'
      hasBackArrow={!companyServicesLoading && serviceID}
    >
      {(companyServicesLoading || ordersLoading) && (
        <Grid container justify='center'>
          <Box margin='100px 0'>
            <Loader />
          </Box>
        </Grid>
      )}
      {!companyServicesLoading && !ordersLoading && !serviceID && (
        <Grid container justify='space-between' alignItems='center'>
          {companyServices &&
            companyServices.map((item, index) => (
              <ServiceItem key={index} item={item} />
            ))}
        </Grid>
      )}
      <Box
        display='flex'
        justifyContent='center'
        onClick={() => push('/company')}
      >
        {orderList?.length === 0 && <NoServiceBlock />}
      </Box>
      {!companyServicesLoading && !ordersLoading && serviceID && ordersData && (
        <OrdersCalendar
          ordersData={orderList}
          ordersLoading={ordersLoading}
          serviceID={serviceID}
          deleteBusinessOrder={deleteBusinessOrder}
          dispatch={dispatch}
        />
      )}
      <Statuses />
    </MainLayout>
  );
};

export default withApollo(withCurrentUser(Orders));
