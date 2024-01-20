import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from '@apollo/client/core'
import {GraphQLWsLink} from '@apollo/client/link/subscriptions'
import {createClient} from 'graphql-ws'
import {setContext} from '@apollo/client/link/context'
import {getMainDefinition} from '@apollo/client/utilities'
import {tokenStore} from "../keycloak";

const apiURL = import.meta.env.VITE_API_BASE_URL
const httpUri = apiURL
const wsUri = apiURL.replace("http://", "ws://").replace("https://", "ws://")

const httpLink = (token:string) => new HttpLink({
    uri: httpUri,
    headers: {
        authorization: token ? `Bearer ${token}` : 'NO TOKEN AVAILABLE',
    }
})

const wsLink = (token:string) => new ApolloLink((operation) =>
    new GraphQLWsLink(
        createClient({
            lazy: true,
            connectionParams: {
                headers: {
                    ...operation.getContext().headers,
                    authorization: token ? `Bearer ${token}` : 'NO TOKEN AVAILABLE',
                }
            },
            lazyCloseTimeout: 10000,
            retryAttempts: 10,
            url: wsUri,
        }),
    ).request(operation),
)

const splitLink = (token:string) => setContext((_, linkParams) => {
    return linkParams.accessToken ? {headers: {authorization: `Bearer ${linkParams.accessToken}`}} : {}
}).split(
    ({query}) => {
        const definition = getMainDefinition(query)
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },

    wsLink(token),
    httpLink(token),
)

export const apolloClientGenerator = (token:string) => {
    const result = new ApolloClient({
        link: splitLink(token),
        cache: new InMemoryCache(),
    })
    singleton = result;
    console.log({singleton});
    // @ts-ignore
    tokenStore.set(token);
    return result;
}

// @ts-ignore
let singleton: ApolloClient<any>;
// @ts-ignore
const apolloClient: ApolloClient<any> = new Proxy({}, {
    get(target, prop) {
        if (prop in singleton) {
            // @ts-ignore
            return singleton[prop];
        } else {
            return 0; // default value
        }
    }
});

// @ts-ignore
export default apolloClient