import React from 'react';
// import ApolloClient from 'apollo-boost';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

const cache = new InMemoryCache();
const link = createUploadLink({ uri: 'https://46.101.138.224:8080/query' });
const client = new ApolloClient({
  link,
  cache,
});

const withApollo = (App) => {
  return () => (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default withApollo;
