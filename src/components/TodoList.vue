<template>
  <div>
      <input 
        type="text" 
        class="form-input" 
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo"
      >
      <todo-task v-for="(todo, index) in todosFiltered" :key="todo.id" :todo="todo" :index="index" @deletedTodo="deleteTodo" @finishedEditTodo="updateEditedTodo"></todo-task>
      <div class="bottom-container">
        <todo-tasks-remaining :remaining="remaining"></todo-tasks-remaining>
        <todo-filters @updatedFilter="updatedFilter"></todo-filters>
        <todo-clear-completed :todosAreCompleted="todosAreCompleted" @clearedCompletedTodos="clearCompletedTodos"></todo-clear-completed>
      </div>
  </div>
</template>

<script>
import TodoTask from './TodoTask'
import TodoTasksRemaining from './TodoTasksRemaining'
import TodoFilters from './TodoFilters'
import TodoClearCompleted from './TodoClearCompleted'

export default {
  name: 'todo-list',
  components: {
    TodoTask,
    TodoTasksRemaining,
    TodoFilters,
    TodoClearCompleted,
  },
  data () {
    return {
      newTodo: '',
      todoId: 3,
      tempEditedText: '',
      filter: "all",
      todos: [
          {
              'id': 1,
              'text': 'Finish this app',
              'completed': false,
              'editing': false,
          },          
          {
              'id': 2,
              'text': 'Get the job',
              'completed': false,
              'editing': false,
          },
      ],
    }
  },
  computed: {
    remaining () {
      return this.todos.filter(todo => !todo.completed).length
    },
    todosFiltered () {
      if(this.filter == "all") {
        return this.todos
      } else if(this.filter == "active"){
        return this.todos.filter(todo => !todo.completed)
      } else if(this.filter == "completed"){
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    },
    todosAreCompleted () {
      return this.todos.filter(todo => todo.completed).length > 0
    },
  },
  methods: {
    addTodo () {
        if(this.newTodo.trim() == ''){
            return
        }
        this.todos.push({
            id: this.todoId,
            text: this.newTodo,
            completed: false,
            editing: false,
        })

        this.newTodo = '' // remove this?
        this.todoId++ // remove this?
    },
    deleteTodo (index) {
        this.todos.splice(index, 1)
    },
    clearCompletedTodos () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    updateEditedTodo (todoData) {
      this.todos.splice(todoData.index, 1, todoData.todo)
    },
    updatedFilter (filter) {
      this.filter = filter
    }
  }
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
