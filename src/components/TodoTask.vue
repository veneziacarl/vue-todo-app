<template>
    <div class="todo-task list-item">
        <div class="list-item-first">
            <input type="checkbox" v-model="completed" @change="finishEditTodo">
            <div v-if="!editing" @dblclick="startEditTodo" class="list-item-inactive" :class="{completed: completed}">{{ text }}</div>
            <input v-else class="list-item-active" type="text" v-model="text" @blur="finishEditTodo" @keyup.enter="finishEditTodo" @keyup.escape="undoEditTodo" v-focus>
        </div>
        <div class="remove-item" @click="deleteTodo(index)">
            &times;
        </div>
    </div>
</template>

<script>
export default {
    name: 'todo-task',
    props: {
        todo: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    data() {
        return{
            'id': this.todo.id,
            'text': this.todo.text,
            'completed': this.todo.completed,
            'editing': this.todo.editing,
            'tempEditedText': '',
        }
    },
    directives: {
        focus: {
            inserted: function(el) {
                el.focus()
            }
        }
    },
    methods: {
        deleteTodo(index) {
            this.$emit('deletedTodo', index)
        },
        startEditTodo() {
            this.tempEditedText = this.text
            this.editing = true
        },
        finishEditTodo() {
            if(this.text.trim() == ''){
                this.text = this.tempEditedText
            }
            this.editing = false
            this.$emit('finishedEditTodo', {
                'index': this.index,
                'todo': {
                    'id': this.id,
                    'text': this.text,
                    'completed': this.completed,
                    'editing:': this.editing,
                }
            })
        },
        undoEditTodo() {
            this.text = this.tempEditedText
            this.editing = false
        },
    }
}
</script>

<style scoped>
.list-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
}
</style>
