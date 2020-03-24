<template>
  <div id="app" class="container">
    <!-- <img src="./assets/logo.png"> -->
    <h1 class="title">todos</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.title {
  text-align: center;
}
</style>
