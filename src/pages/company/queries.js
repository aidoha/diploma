import gql from 'graphql-tag';

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
