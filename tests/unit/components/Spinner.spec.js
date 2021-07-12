import { mount } from '@vue/test-utils'
import Spinner from '@/components/Spinner.vue'

test('renders a spin', () => {
  const wrapper = mount(Spinner)
  expect(wrapper.html()).toBe('<div class="spin"></div>')
})