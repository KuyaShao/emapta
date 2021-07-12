<template>
<div v-if="post">
  <form @submit.prevent="handleUpdate">
    <label for="title">Title:</label>
    <input v-model="post.title" type="text" required />
    <label for="details">Details:</label>
    <textarea v-model="post.body" id="" cols="30" rows="10" required></textarea>
    <button>Update Projects</button>
  </form>
</div>
<div v-else><Spinner /></div>

</template>

<script>
import getPost from "../composables/getPost";
import { useRouter } from "vue-router";
import { projectFirestore, timestamp } from "../firebase/config";
import Spinner from "../components/Spinner.vue"
export default {
props:['id'],
components:{
Spinner
},
setup({id}) {
 
    const router = useRouter();
  
    const { post, error, load } = getPost(id);
    load();

    const handleUpdate = async() => {
      const p = {
        title: post.value.title,
        body: post.value.body,
      };
      const res = await projectFirestore.collection("posts").doc(id).update(p);
      console.log(res)
      router.push({name:'Home'});
    };

    return { post, error, handleUpdate };
  },
};
</script>

<style>
</style>