import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

// const link = new HttpLink({

//   credentials: 'same-origin'
// });
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'http://46.101.138.224:8080/query',
  fetchOptions: {
    mode: 'no-cors'
  },
  cache
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
