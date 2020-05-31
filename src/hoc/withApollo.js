import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'https://46.101.138.224:8080/query',
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
