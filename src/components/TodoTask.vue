<template>
    <div class="todo-task list-item">
        <div class="list-item-first">
            <input type="checkbox" v-model="completed" @change="editTodo">
            
            <div 
            v-if="!editing" 
            @dblclick="editingMode" 
            class="list-item-inactive" 
            :class="{completed: completed}">{{ text }}</div>
            
            <input 
            v-else class="list-item-active" 
            type="text" 
            v-model="text" 
            @blur="editTodo" 
            @keyup.enter="editTodo" 
            @keyup.escape="undoEditTodo" 
            v-focus>
        </div>
        <div class="remove-item" @click="deleteTodo">
            x
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
        deleteTodo() {
            this.$store.commit('deleteTodo', this.id)
        },
        editingMode() {
            this.tempEditedText = this.text
            this.editing = true
        },
        editTodo() {
            if(this.text.trim() == ''){
                this.text = this.tempEditedText
            }
            this.editing = false
            this.$store.commit('editTodo', {
                'id': this.id,
                'text': this.text,
                'completed': this.completed,
                'editing:': this.editing,
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
.remove-item {
    cursor: pointer;
    margin-left: 14px;
    color: #48C0FB;
    font-size: 25px;
}
.list-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
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
}
.completed {
  text-decoration: line-through;
  color: gray;
}

</style>
