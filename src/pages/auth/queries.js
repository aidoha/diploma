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
    $businessCompanyAddress: String!
  ) {
    createBusinessCompany(
      input: {
        businessCompanyName: $businessCompanyName
        businessCompanyCategoryID: $businessCompanyCategoryID
        businessCompanyAddress: $businessCompanyAddress
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

export const FORGOT_PASSWORD = gql`
  mutation passwordForgot($businessOwnerEmail: String!) {
    BusinessOwnerPasswordForgot(
      input: { businessOwnerEmail: $businessOwnerEmail }
    ) {
      success
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation resetPassword(
    $businessOwnerEmail: String!
    $businessOwnerPassword: String!
  ) {
    ResetBusinessOwnerPassword(
      input: {
        businessOwnerEmail: $businessOwnerEmail
        businessOwnerPassword: $businessOwnerPassword
      }
    ) {
      businessOwner {
        businessOwnerID
        businessOwnerName
        businessOwnerEmail
      }
    }
  }
`;
