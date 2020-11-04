import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3000/graphql',
});
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

Vue.config.productionTip = false;
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

new Vue({
  vuetify,
  VueApollo,
  apolloProvider,
  render: h => h(App)
}).$mount('#app');
