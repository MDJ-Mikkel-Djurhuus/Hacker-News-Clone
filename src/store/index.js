import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        activeType: "stories",
        postsPerPage: 20,
        posts: {},
        post: {},
        users: {},
        user: {},
        loggedUser: {},
        lists: {
            comment: [ /* number */ ],
            story: [ /* number */ ],
            post: [ /* number */ ],
        }
    },
    actions,
    mutations,
    getters
})

export default store;