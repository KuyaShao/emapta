<template>
    <form @submit.prevent="handleSubmit" data-test="form">
      <label for="title">Title:</label>
      <input data-test="new-title" v-model="title" type="text" required>
      <label  for="body">Body:</label>
      <textarea data-test="new-body" v-model="body" id="" cols="30" rows="10" required></textarea>
      <button>Add Post</button>
  </form>
</template>

<script>
import {ref} from "vue"
import {useRouter} from "vue-router"
import { projectFirestore,timestamp } from '../firebase/config'

export default {
setup(){
    const title = ref('')
     const body = ref('')
     const router = useRouter()

     const handleSubmit =async()=>{
         const post = {
        title: title.value,
        body: body.value,
        createdAt:timestamp()
      };

    const res = await projectFirestore.collection('posts').add(post)

      router.push({name:'Home'})
     }
     return {title,body,handleSubmit}
}
}
</script>

<style>
form{
    background: white;
    padding: 20px;
    border-radius: 10px;

}
label{
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}
input{
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
    box-sizing: border-box;
}
textarea{
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
}
form button{
    display: block;
    margin: 20px auto 0;
    background: #00ce89;
    color: white;
    padding: 10px;
    border: 0;
    border-radius: 0;
    font-size: 16px;
    cursor: pointer;
}
</style>