<template>
    <div>
        <button class="box" :class="{active: filter === 'all'}" @click="updateFilter('all')">All</button>
        <button class="box" :class="{active: filter === 'active'}" @click="updateFilter('active')">Active</button>
        <button class="box" :class="{active: filter === 'completed'}" @click="updateFilter('completed')">Completed</button>
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

<style scoped>
button {
  font-size: 14px;
  background-color: white;
  appearance: none;
  font-weight: bold;
  color: #48C0FB;
  border: 1px solid #48C0FB;
}

button.active {
  background: #48C0FB;
  color: white;
}
</style>
