<template>
      <input 
        type="text" 
        class="form-input" 
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo"
      >  
</template>

<script>
export default {
    name: 'todo-input',
    data() {
        return {
            newTodo: '',
            todoId: 3,
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
