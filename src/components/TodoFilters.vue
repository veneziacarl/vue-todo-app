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
    data() {
        return {
            'filter': "all",
        }
    },
    methods: {
        updateFilter(filter) {
            this.filter = filter
            this.$emit('updatedFilter', filter)
        }
    }
}
</script>
