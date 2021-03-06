import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8088/graphql',
  })
});

import Login from './pages/Login/index';

const App = () => {
	return (
		<ApolloProvider client={client}>
			<Login />
		</ApolloProvider>
	)
}

ReactDOM.render(<App />, document.getElementById('app'));
