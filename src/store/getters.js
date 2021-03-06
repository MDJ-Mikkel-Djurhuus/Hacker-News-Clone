export default {
    // ids of the items that should be currently displayed based on
    // current list type and current pagination
    activeIds(state) {
        const { activeType, itemsPerView, lists } = state

        if (!activeType) {
            return []
        }

        //   const page = Number(state.route.params.page) || 1
        //   const start = (page - 1) * itemsPerView
        //   const end = page * itemsPerView

        //   return lists[activeType].slice(start, end)
        return lists[activeType]
    },

    // items that should be currently displayed.
    // this Array may not be fully fetched.
    activePosts(state, getters) {
        return getters.activeIds.map(id => state.posts[id]).filter(_ => _)
    }
}