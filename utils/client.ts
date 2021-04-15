import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = (token) =>
  new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: "https://graphql.fauna.com/graphql",
    headers: {
      authorization: `Basic ${token}`,
    },
    cache: new InMemoryCache(),
  });
