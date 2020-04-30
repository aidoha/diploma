import gql from 'graphql-tag';

export const GET_BUSINESS_COMPANY = gql`
  query getBusinessCompany($businessCompanyID: ID!) {
    getBusinessCompany(input: { businessCompanyID: $businessCompanyID }) {
      businessCompanyName
    }
  }
`;

export const GET_BUSINESS_COMPANY_SERVICES = gql`
  query GetBusinessCompanyServices($businessCompanyID: ID!) {
    getBusinessCompanyServices(
      input: { businessCompanyID: $businessCompanyID }
    ) {
      businessCompanyService {
        companyServiceID
        companyServiceName
        companyServicePrice
        companyServiceDuration
      }
    }
  }
`;

export const DELETE_COMPANY_SERVICE = gql`
  mutation DeleteCompanyService($companyServiceID: ID!) {
    deleteCompanyService(input: { companyServiceID: $companyServiceID }) {
      companyService {
        companyServiceID
      }
    }
  }
`;

export const GET_COMPANY_OPERTATION_HOURS = gql`
  query getBusinessCompanyOperationHours($businessCompanyID: Int!) {
    getBusinessCompanyOperationHours(
      input: { businessCompanyID: $businessCompanyID }
    ) {
      businessCompanyOperationHour {
        companyOperationHourID
        dayOfWeek
        openTime
        closeTime
      }
    }
  }
`;

export const CREACTE_COMPANY_OPERTATION_HOURS = gql`
  mutation createBusinessCompanyOperationHours(
    $businessCompanyID: Int!
    $dayOfWeek: Int!
    $openTime: String!
    $closeTime: String!
  ) {
    createBusinessCompanyOperationHours(
      input: {
        businessCompanyID: $businessCompanyID
        dayOfWeek: $dayOfWeek
        openTime: $openTime
        closeTime: $closeTime
      }
    ) {
      businessCompanyOperationHour {
        companyOperationHourID
      }
    }
  }
`;
