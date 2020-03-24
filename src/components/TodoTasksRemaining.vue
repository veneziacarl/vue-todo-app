<template>
    <div>{{ remaining }} task{{ plural }} left</div>
</template>

<script>
export default {
  name: 'todo-tasks-remaining',
  computed: {
    remaining () {
      return this.$store.getters.remaining
    },
    plural () {
      if(this.$store.getters.remaining > 1 || this.$store.getters.remaining == 0) {
        return 's' 
      }
    }
  }
}
</script>
