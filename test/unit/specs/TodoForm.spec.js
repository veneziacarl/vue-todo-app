import Vue from 'vue'
import TodoForm from '@/components/TodoForm'

describe('MyComponent', () => {
  it('has computed properties', () => {
    expect(typeof TodoForm.nextTodoId).toBe(1)
  })

  it('sets the correct default data', () => {
    expect(typeof TodoForm.data).toBe('function')
    const defaultData = TodoForm.data()
    expect(defaultData.tempTodo).toBe('')
  })
})