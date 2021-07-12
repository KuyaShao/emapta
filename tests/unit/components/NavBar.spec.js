import { mount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'
test('renders a profile link', () => {
    const wrapper = mount(NavBar)
  
    // Here we are implicitly asserting that the
    // element #profile exists.
    const homeLink = wrapper.get('#home')
    const postLink = wrapper.get('#add-post')
    expect(homeLink.text()).toEqual('Home')
    expect(postLink.text()).toEqual('Add New Post')
  })