<template>
  <div class="home" data-test="add-post">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length">
      <div v-for="post in posts" :key="post.id">
        <SingleProject :post="post" :posts="posts" @delete="handleDelete" />
      </div>
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
// @ is an alias to /src

import getPosts from "../composables/getPosts";
import Spinner from "../components/Spinner.vue";
import SingleProject from "../components/SingleProject.vue";
export default {
  name: "Home",
  components: {
    Spinner,
    SingleProject,
  },
  setup() {
    const { posts, error, load } = getPosts();
    load();
    console.log(posts)
    const handleDelete = (id) =>{
      posts.value = posts.value.filter((post)=>{
        return post.id !== id
      })
    }
    return { posts, error,handleDelete };
  },
};
</script>
