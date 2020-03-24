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
            todoId: 0,
            tempEditedText: '',
        }
    },
    methods: {
        addTodo () {
            if(this.tempTodo.trim() == ''){
                return
            }
            this.$store.commit('addTodo', {
                id: this.todoId,
                text: this.tempTodo,
            })
            this.tempTodo = ''
            this.todoId++
        },
    }
}
</script>
