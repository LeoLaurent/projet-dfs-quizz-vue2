import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueApollo from 'vue-apollo'
import VueRouter from 'vue-router'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        username: '',
    },
    mutations: {
        newUser (state, username) {
            state.username = username
        },
        delUser (state){
            state.username = '';
        }

    },
    getters: {
        username: state => state.username,
        sent: state => state.sent
    }
});

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: require('./components/ListeQuizz').default },
        { path: '/quizz/create', component: require('./components/addSquizz').default },
        { path: '/quizz/:idQuizz', component: require('./components/Leaderboard').default },
        { path: '/quizz/:idQuizz/questions', component: require('./components/QuizzPage').default },
        { path: '/quizz/:idQuizz/:idScore', component: require('./components/Leaderboard').default },
        { path: '*', redirect: '/' },
    ]
});


const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'http://localhost:3000/graphql',
});
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

Vue.config.productionTip = false;
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

Vue.use(VueApollo);

new Vue({
    vuetify,
    apolloProvider,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
