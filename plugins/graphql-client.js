// plugins/graphql-client.js
import { defineNuxtPlugin } from '#app'
import { GraphQLClient } from 'graphql-request'

export default defineNuxtPlugin(() => {
  const client = new GraphQLClient('http://localhost:4000/graphql')
  
  return {
    provide: {
      gqlClient: client
    }
  }
})