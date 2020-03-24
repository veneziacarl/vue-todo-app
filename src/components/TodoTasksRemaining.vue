<template>
    <div>{{ remaining }} items left</div>
</template>

<script>
export default {
  name: 'todo-tasks-remaining',
  computed: {
    remaining () {
      return this.$store.getters.remaining
    }
  }
}
</script>
