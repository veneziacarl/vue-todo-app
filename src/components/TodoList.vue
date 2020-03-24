<template>
  <div>
      <input 
        type="text" 
        class="form-input" 
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo"
      >
      <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <div v-for="(todo, index) in todosFiltered" :key="todo.id" class="list-item">
          <div class="list-item-first">
            <input type="checkbox" v-model="todo.completed">
            <div v-if="!todo.editing" @dblclick="startEditTodo(todo)" class="list-item-inactive" :class="{completed: todo.completed}">{{ todo.text }}</div>
            <input v-else class="list-item-active" type="text" v-model="todo.text" @blur="finishEditTodo(todo)" @keyup.enter="finishEditTodo(todo)" @keyup.escape="undoEditTodo(todo)" v-focus>
          </div>
          <div class="remove-item" @click="deleteTodo(index)">
            &times;
          </div>
      </div>
      </transition-group>
      <div class="bottom-container">
        <div>{{ remaining }} items left</div>
        <div>
          <button :class="{active: filter == 'all'}" @click="filter = 'all'">All</button>
          <button :class="{active: filter == 'active'}" @click="filter = 'active'">Active</button>
          <button :class="{active: filter == 'completed'}" @click="filter = 'completed'">Completed</button>
        </div>
        <div>
          <transition name="fade">
          <button v-if="todosAreCompleted" @click="clearCompletedTodos">Clear Completed</button>
          </transition>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
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
    remaining() {
      return this.todos.filter(todo => !todo.completed).length
    },
    todosFiltered() {
      if(this.filter == "all") {
        return this.todos
      } else if(this.filter == "active"){
        return this.todos.filter(todo => !todo.completed)
      } else if(this.filter == "completed"){
        return this.todos.filter(todo => todo.completed)
      }
      return this.todos
    },
    todosAreCompleted() {
      return this.todos.filter(todo => todo.completed).length > 0
    },
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  },
  methods: {
    addTodo() {
        if(this.newTodo.trim() == ''){
            return
        }
        this.todos.push({
            id: this.todoId,
            text: this.newTodo,
            completed: false,
            editing: false,
        })

        this.newTodo = ''
        this.todoId++
    },
    deleteTodo(index) {
        this.todos.splice(index, 1)
    },
    startEditTodo(todo) {
      this.tempEditedText = todo.text
      todo.editing = true
    },
    finishEditTodo(todo) {
      if(todo.text.trim() == ''){
        todo.text = this.tempEditedText
      }
      todo.editing = false
    },
    undoEditTodo(todo) {
      todo.text = this.tempEditedText
      todo.editing = false
    },
    clearCompletedTodos() {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@import url(
  "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
);

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
.list-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
