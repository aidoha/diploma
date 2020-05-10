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
        clientID: 1
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
