import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io'
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
