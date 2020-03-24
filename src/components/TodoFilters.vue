<template>
    <div>
        <button :class="{active: filter === 'all'}" @click="updateFilter('all')">All</button>
        <button :class="{active: filter === 'active'}" @click="updateFilter('active')">Active</button>
        <button :class="{active: filter === 'completed'}" @click="updateFilter('completed')">Completed</button>
    </div>    
</template>

<script>
export default {
    name: 'todo-filters',
    computed: {
        filter() {
            return this.$store.state.filter
        }
    },
    methods: {
        updateFilter(filter) {
            this.$store.commit('updateFilter', filter)
        }
    }
}
</script>
