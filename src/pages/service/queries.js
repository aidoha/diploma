import gql from 'graphql-tag';

export const GET_BUSINESS_SUBCATEGORIES = gql`
  query createBusinessOwner(
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
      businessOwnerID
    }
  }
`;
