import gql from 'graphql-tag';

export const GET_BUSINESS_SERVICE_ORDERS = gql`
  query GetBusinessServiceOrders($businessServiceID: ID!) {
    getBusinessServiceOrders(input: { businessServiceID: $businessServiceID }) {
      businessServicesOrders {
        businessServiceOrderID
        clientID
        businessServiceID
        createdAt
        clientFirstName
        clientPhoneNumber
        clientPhoneNumberPrefix
        clientCommentary
        startAt
        endAt
      }
    }
  }
`;

export const CREATE_BUSINESS_SERVICE_ORDER = gql`
  mutation CreateBusinessServiceOrder(
    $businessServiceID: ID!
    $startAt: String!
    $clientFirstName: String!
    $clientPhoneNumber: String!
    $clientPhoneNumberPrefix: String!
    $clientCommentary: String!
  ) {
    createBusinessServiceOrder(
      input: {
        businessServiceID: $businessServiceID
        clientID: 2
        startAt: $startAt
        prePaid: false
        clientFirstName: $clientFirstName
        clientPhoneNumber: $clientPhoneNumber
        clientPhoneNumberPrefix: $clientPhoneNumberPrefix
        clientCommentary: $clientCommentary
      }
    ) {
      businessServiceOrder {
        businessServiceOrderID
      }
    }
  }
`;

export const UPDATE_BUSINESS_SERVICE_ORDER = gql`
  mutation UpdateBusinessServiceOrder(
    $orderID: ID!
    $businessServiceID: ID!
    $startAt: String!
    $clientFirstName: String!
    $clientPhoneNumber: String!
    $clientPhoneNumberPrefix: String!
    $clientCommentary: String!
  ) {
    UpdateBusinessServiceOrder(
      input: {
        orderID: $orderID
        businessServiceID: $businessServiceID
        startAt: $startAt
        prePaid: false
        clientFirstName: $clientFirstName
        clientPhoneNumber: $clientPhoneNumber
        clientPhoneNumberPrefix: $clientPhoneNumberPrefix
        clientCommentary: $clientCommentary
      }
    ) {
      businessServiceOrder {
        businessServiceID
        createdAt
        businessServiceOrderID
        endAt
        startAt
        clientCommentary
        clientPhoneNumber
        clientPhoneNumberPrefix
        clientFirstName
        prePaid
      }
    }
  }
`;

export const DELETE_BUSINESS_SERVICE_ORDER = gql`
  mutation DeleteCustomerOrders($orderID: ID!) {
    DeleteBusinessServiceOrder(input: { orderID: $orderID }) {
      businessServiceOrder {
        businessServiceOrderID
      }
    }
  }
`;

export const GET_ORDER_AVAILABLE_HOURS = gql`
  query GetBusinessServiceAvailableHours(
    $businessServiceID: ID!
    $date: String!
  ) {
    getCompanyAvailableHoursByDate(
      input: { businessServiceID: $businessServiceID, date: $date }
    ) {
      availableHour
    }
  }
`;
