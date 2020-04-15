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
