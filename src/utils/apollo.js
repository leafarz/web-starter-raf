// import { getCurrentUserFromLocalStorage } from '../utils/localStorage';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import initializeCache from '../graphql/initializeCache';
import { BACKEND_HOST } from './constants';

const httpLink = createHttpLink({
  uri: BACKEND_HOST
});

export const client = new ApolloClient({
  link: httpLink,
  cache: initializeCache(),
});
