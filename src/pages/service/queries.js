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
