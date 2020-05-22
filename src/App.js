import React from 'react';
import client from './client';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {ApolloProvider} from 'react-apollo';


// ===========================

const ME = gql`
  query me{
    user(login: "iteachonudemy"){
      name
      avatarUrl
    }
  }
`

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>Hello</div>
      <Query query={ME}>
        {
          ({loading,error,data}) => {
            if(loading) return 'Loading...'
            if(error) return `Error! ${error.message}`
            return <div>{data.user.name}</div>
          }
        }
      </Query>
    </ApolloProvider>
  );
}

export default App;
