<template>
  <div>
      <todo-form></todo-form>
      <todo-task v-for="todo in todosFiltered" :key="todo.id" :todo="todo"></todo-task>
      <div class="bottom-container">
        <todo-tasks-remaining></todo-tasks-remaining>
        <todo-filters></todo-filters>
        <todo-clear-completed></todo-clear-completed>
      </div>
  </div>
</template>

<script>
import TodoTask from './TodoTask'
import TodoTasksRemaining from './TodoTasksRemaining'
import TodoFilters from './TodoFilters'
import TodoClearCompleted from './TodoClearCompleted'
import TodoForm from './TodoForm'

export default {
  name: 'todo-list',
  components: {
    TodoTask,
    TodoTasksRemaining,
    TodoFilters,
    TodoClearCompleted,
    TodoForm,
  },
  computed: {
    todosFiltered () {
      return this.$store.getters.todosFiltered
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.bottom-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 2px dotted #48C0FB;
  padding-top: 15px;
  margin-bottom: 15px;
}

</style>
