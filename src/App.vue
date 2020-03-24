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
  font-family: 'sans-serif';
  margin-top: 75px;
  color: darkslategrey;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.title {
  text-align: center;
  font-weight: bold;
  color: #48C0FB;
}
</style>
