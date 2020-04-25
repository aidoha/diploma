import gql from 'graphql-tag';

export const GET_BUSINESS_CATEGORIES = gql`
  query getBusinessCategories {
    getBusinessCategories {
      businessCategoryID
      businessCategoryName
    }
  }
`;

export const CREATE_BUSINESS_COMPANY = gql`
  mutation createBusinessCompany(
    $businessCompanyName: String!
    $businessCompanyCategoryID: ID!
  ) {
    createBusinessCompany(
      input: {
        businessCompanyName: $businessCompanyName
        businessCompanyCategoryID: $businessCompanyCategoryID
      }
    ) {
      businessCompanyID
    }
  }
`;

export const CREATE_BUSINESS_OWNER = gql`
  mutation createBusinessOwner(
    $businessOwnerName: String!
    $businessOwnerEmail: String!
    $businessOwnerPassword: String!
    $businessOwnerPhoneNumberPrefix: String!
    $businessOwnerPhoneNumber: String!
    $businessCompanyID: ID!
  ) {
    createBusinessOwner(
      input: {
        businessOwnerName: $businessOwnerName
        businessCompanyID: $businessCompanyID
        businessOwnerEmail: $businessOwnerEmail
        businessOwnerPassword: $businessOwnerPassword
        businessOwnerPhoneNumber: $businessOwnerPhoneNumber
        businessOwnerPhoneNumberPrefix: $businessOwnerPhoneNumberPrefix
      }
    ) {
      businessOwner {
        businessOwnerID
      }
      token {
        accessToken
        expiresIn
        tokenType
        refreshToken
      }
    }
  }
`;

export const GENERATE_TOKEN = gql`
  mutation generateToken($email: String!, $password: String!) {
    generateToken(input: { email: $email, password: $password }) {
      accessToken
    }
  }
`;
