import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'vue-todo-app',
    storage: window.localStorage
})

export const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        filter: "all",
        todos: [],      
    },
    getters: {
        remaining (state) {
            return state.todos.filter(todo => !todo.completed).length
        },
        todosFiltered (state) {
            if(state.filter == "all") {
                return state.todos
            } else if(state.filter == "active"){
                return state.todos.filter(todo => !todo.completed)
            } else if(state.filter == "completed"){
                return state.todos.filter(todo => todo.completed)
            }
            return state.todos
        },
        todosAreCompleted (state) {
            return state.todos.filter(todo => todo.completed).length > 0
        },
    },
    mutations: {
        addTodo(state, todo) {
            state.todos.push ({
                id: todo.id,
                text: todo.text,
                completed: false,
                editing: false,
            })
        },
        clearCompletedTodos(state) {
            state.todos = state.todos.filter(todo => !todo.completed)
        },
        updateFilter(state, filter) {
            state.filter = filter
        },
        deleteTodo(state, id) {
            const index = state.todos.findIndex((item) => item.id == id)
            state.todos.splice(index, 1)
        },
        editTodo(state, todo) {
            const index = state.todos.findIndex((item) => item.id == todo.id)
            state.todos.splice(index, 1, {
                'id': todo.id,
                'text': todo.text,
                'completed': todo.completed,
                'editing:': todo.editing,
            })
        }
    },
})