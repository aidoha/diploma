import gql from 'graphql-tag';

export const GET_BUSINESS_COMPANY = gql`
  query getBusinessCompany($businessCompanyID: ID!) {
    getBusinessCompany(input: { businessCompanyID: $businessCompanyID }) {
      businessCompanyName
      businessCompanyImages {
        imageID
        imagePath
      }
      businessCompanyAddress
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

export const CREATE_COMPANY_OPERTATION_HOURS = gql`
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

export const UPDATE_COMPANY_OPERATION_HOURS = gql`
  mutation updateBusinessCompanyOperationHours(
    $companyOperationHourID: ID!
    $businessCompanyID: Int!
    $dayOfWeek: Int!
    $openTime: String!
    $closeTime: String!
  ) {
    updateBusinessCompanyOperationHours(
      input: {
        companyOperationHourID: $companyOperationHourID
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

export const DELETE_COMPANY_OPERATION_HOURS = gql`
  mutation deleteBusinessCompanyOperationHours($companyOperationHourID: Int!) {
    deleteBusinessCompanyOperationHours(
      input: { companyOperationHourID: $companyOperationHourID }
    ) {
      businessCompanyOperationHour {
        companyOperationHourID
      }
    }
  }
`;

export const UPLOAD_COMPANY_IMAGES = gql`
  mutation uploadCompanyImages($bussinessCompanyID: ID!, $file: Upload!) {
    BusinessCompanyImageUpload(
      input: { bussinessCompanyID: $bussinessCompanyID, file: $file }
    ) {
      id
      name
      content
      contentType
    }
  }
`;
