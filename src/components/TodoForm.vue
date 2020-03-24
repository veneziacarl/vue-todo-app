<template>
    <input 
    type="text" 
    class="form-input" 
    placeholder="What needs to be done?"
    v-model="tempTodo"
    @keyup.enter="addTodo"
    >
</template>

<script>
export default {
    name: 'todo-form',
    data () {
        return {
            tempTodo: '',
            tempEditedText: '',
        }
    },
    computed: {
        nextTodoId() {
            return this.$store.getters.nextTodoId
        }
    },
    methods: {
        addTodo () {
            if(this.tempTodo.trim() == ''){
                return
            }
            const tempId = this.nextTodoId
            this.$store.commit('addTodo', {
                id: tempId,
                text: this.tempTodo,
            })
            this.tempTodo = ''
            this.$store.commit('incrementTodoID')
        },
    }
}
</script>

<style scoped>
.form-input {
  width: 95%;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 16px;
  border: 2px dotted #48C0FB;
}

</style>
