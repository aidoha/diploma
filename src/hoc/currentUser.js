import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const accessToken = localStorage.getItem('isLoggedIn') || '';

const RETRIEVE_TOKEN_INFO = gql`
  query retrieveTokenInfo($accessToken: String!) {
    retrieveTokenInfo(input: { accessToken: $accessToken }) {
      email
      expiresAt
      issuedAt
    }
  }
`;
const GET_OWNER_BUSINESSES = gql`
  query GetOwnerBusinesses($email: String!) {
    getBusinessOwnerCompanies(input: { email: $email }) {
      companies {
        businessCompanyID
        businessCompanyCategoryID
        businessCompanyName
      }
    }
  }
`;

const withCurrentUser = (Component) => {
  return () => {
    const { data: tokenInfo, loading: tokenInfoLoading } = useQuery(
      RETRIEVE_TOKEN_INFO,
      {
        variables: { accessToken },
      }
    );
    const { data: currentUser, loading: currentUserLoading } = useQuery(
      GET_OWNER_BUSINESSES,
      {
        variables: { email: tokenInfo?.retrieveTokenInfo?.email },
        skip: !tokenInfo,
      }
    );

    if (tokenInfoLoading || currentUserLoading) {
      return <div />;
    }

    return (
      <Component
        tokenInfo={tokenInfo?.retrieveTokenInfo}
        currentUser={currentUser?.getBusinessOwnerCompanies?.companies}
      />
    );
  };
};

export default withCurrentUser;
