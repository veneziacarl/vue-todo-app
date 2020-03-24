import Vue from 'vue'
import App from '@/App'
import { mount } from '@vue/test-utils'

describe('App.vue', () => {
  const wrapper = mount(App)

  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title').textContent)
      .toEqual('todos')
  })
})
