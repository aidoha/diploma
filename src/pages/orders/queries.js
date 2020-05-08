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
