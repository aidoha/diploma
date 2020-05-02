import gql from 'graphql-tag';

export const GET_BUSINESS_SUBCATEGORIES_UNDER_CATEGORY = gql`
  query getBusinessSubCategoriesUnderCategory($businessCategoryID: ID!) {
    getBusinessSubCategoriesUnderCategory(
      input: { businessCategoryID: $businessCategoryID }
    ) {
      businessSubCategories {
        businessCategoryID
        businessSubCategoryID
        businessSubCategoryName
      }
    }
  }
`;

export const GET_BUSINESS_SERVICES_UNDER_SUBCATEGORY = gql`
  query GetBusinessServicesUnderSubCategory($subCategoryID: Int!) {
    getBusinessServicesUnderSubCategory(
      input: { subCategoryID: $subCategoryID }
    ) {
      businessServices {
        businessServiceID
        businessServiceName
        subCategories
      }
    }
  }
`;

export const GET_COMPANY_SERVICE = gql`
  query GetCompanyService($companyServiceID: ID!) {
    getCompanyService(input: { companyServiceID: $companyServiceID }) {
      companyServiceID
      companyServiceName
      companyServicePrice
      companyServiceDuration
      businessServiceID
      businessServiceName
      businessCompanyID
      businessCompanyName
    }
  }
`;

export const CREATE_COMPANY_SERVICE = gql`
  mutation createCompanyService(
    $companyServiceName: String!
    $companyServiceDuration: Int!
    $companyServicePrice: Float!
    $businessServiceID: Int!
    $businessCompanyID: Int!
  ) {
    createCompanyService(
      input: {
        companyServiceName: $companyServiceName
        companyServiceDuration: $companyServiceDuration
        companyServicePrice: $companyServicePrice
        businessServiceID: $businessServiceID
        businessCompanyID: $businessCompanyID
      }
    ) {
      companyService {
        companyServiceID
        companyServiceName
        companyServicePrice
        companyServiceDuration
        businessServiceID
        businessCompanyID
      }
    }
  }
`;

export const UPDATE_COMPANY_SERVICE = gql`
  mutation UpdateCompanyService(
    $companyServiceID: ID!
    $companyServiceName: String!
    $companyServiceDuration: Int!
    $companyServicePrice: Float!
    $businessServiceID: Int!
    $businessCompanyID: Int!
  ) {
    updateCompanyService(
      input: {
        companyServiceID: $companyServiceID
        companyServiceName: $companyServiceName
        companyServicePrice: $companyServicePrice
        companyServiceDuration: $companyServiceDuration
        businessServiceID: $businessServiceID
        businessCompanyID: $businessCompanyID
      }
    ) {
      companyService {
        companyServiceID
        companyServiceName
        companyServicePrice
        companyServiceDuration
        businessServiceID
        businessCompanyID
      }
    }
  }
`;

// create own service if doesn't exist in list
export const CREATE_BUSINESS_SERVICE = gql`
  mutation createBusinessService(
    $businessServiceName: String!
    $businessServiceSubCategories: [Int!]!
  ) {
    createBusinessService(
      input: {
        businessServiceName: $businessServiceName
        businessServiceSubCategories: $businessServiceSubCategories
      }
    ) {
      businessService {
        businessServiceID
      }
    }
  }
`;

export const GET_SERVICE_OPERATION_HOURS = gql`
  query GetBusinessCompanyServiceOperationHours($serviceID: Int!) {
    getBusinessCompanyServiceOperationHours(input: { serviceID: $serviceID }) {
      businessCompanyServiceOperationHour {
        serviceOperationHourID
        businessCompanyID
        businessServiceID
        dayOfWeek
        openTime
        closeTime
      }
    }
  }
`;

export const CREATE_SERVICE_OPERATION_HOURS = gql`
  mutation CreateBusinessCompanyServiceOperationHours(
    $businessCompanyID: Int!
    $businessServiceID: Int!
    $dayOfWeek: Int!
    $openTime: String!
    $closeTime: String!
  ) {
    createBusinessCompanyServiceOperationHours(
      input: {
        businessCompanyID: $businessCompanyID
        businessServiceID: $businessServiceID
        dayOfWeek: $dayOfWeek
        openTime: $openTime
        closeTime: $closeTime
      }
    ) {
      businessCompanyServiceOperationHour {
        serviceOperationHourID
      }
    }
  }
`;

export const UPDATE_SERVICE_OPERATION_HOURS = gql`
  mutation UpdateBusinessCompanyServiceOperationHours(
    $operationHourID: Int!
    $businessCompanyID: Int!
    $businessServiceID: Int!
    $dayOfWeek: Int!
    $openTime: String!
    $closeTime: String!
  ) {
    updateBusinessCompanyServiceOperationHours(
      input: {
        operationHourID: $operationHourID
        businessCompanyID: $businessCompanyID
        businessServiceID: $businessServiceID
        dayOfWeek: $dayOfWeek
        openTime: $openTime
        closeTime: $closeTime
      }
    ) {
      businessCompanyServiceOperationHour {
        serviceOperationHourID
      }
    }
  }
`;

export const DELETE_SERVICE_OPERATION_HOURS = gql`
  mutation DeleteBusinessCompanyServiceOperationHours($operationHourID: Int!) {
    deleteBusinessCompanyServiceOperationHours(
      input: { operationHourID: $operationHourID }
    ) {
      businessCompanyServiceOperationHour {
        serviceOperationHourID
      }
    }
  }
`;
