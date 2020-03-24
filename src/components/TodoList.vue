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

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.form-input {
  width: 100%;
  padding: 10px 10px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
      outline: 0;
  }
}
.remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover {
        color:black;
    }
}
.list-item-first {
  display: flex;
  align-items: center;
}
.list-item-inactive {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}
.list-item-active {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: 'Avenir', Helvetica, Arial, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  &:focus {
    outline:none;
  }
}
.completed {
  text-decoration: line-through;
  color: gray;
}

.bottom-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}

button {
  font-size: 14px;
  background-color: white;
  appearance: none;

  /* &:hover {
    background: lightgreen;
  }

  &:focus {
    outline: none;
  } */
}

button.active {
  background: green;
  color: white;
}
</style>
