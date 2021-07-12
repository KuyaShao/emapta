import { mount } from '@vue/test-utils'
import AddPost from '@/views/AddPost.vue'
import Home from "@/views/Home.vue"


test('creates a new post', async() => {
  const wrapper = mount(AddPost)
  const wrapper2 = mount(Home)
  expect(wrapper2.findAll('[data-test="add-post"]')).toHaveLength(1)

  await wrapper.get('[data-test="new-title"]').setValue('try lang')
  await wrapper.get('[data-test="new-body"]').setValue('try2')
  await wrapper.get('[data-test="form"]').trigger('submit')

  expect(wrapper2.findAll('[data-test="add-post"]')).toHaveLength(1)
})