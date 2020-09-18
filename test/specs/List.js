import test from 'ava'
import { mount } from '@vue/test-utils'
import List from '../../components/List'

let wrapper

const list = ['Coffee', 'Tea', 'Snicker', 'Mars']

test.beforeEach(() => {
  wrapper = mount(List, {
    propsData: { list },
  })
})

test('List.vue snapshot', (t) => {
  // console.log(wrapper.html())
  t.snapshot({ html: wrapper.html() })
})

test('List.vue to display list', (t) => {
  const $items = wrapper.findAll('li').wrappers

  $items.forEach(($item, index) => {
    console.log($item.text());
    t.is($item.text(), list[index])
  })
})