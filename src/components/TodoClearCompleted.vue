<template>
    <div>
        <transition name="fade">
        <button 
        v-if="todosAreCompleted" 
        @click="clearCompletedTodos">Clear Completed</button>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'todo-clear-completed',
    computed: {
        todosAreCompleted() {
            return this.$store.getters.todosAreCompleted
        },
    },
    methods: {
        clearCompletedTodos () {
            this.$store.commit('clearCompletedTodos')
        },
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
