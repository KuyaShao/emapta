<template>
  <div class="project" data-test="add-post">
    <div class="actions" @click="showDetails = !showDetails">
      <h3>{{ post.title }}</h3>
      <div class="icons">
        <router-link :to="{ name: 'EditPost', params: { id: post.id } }">
          <span class="material-icons">edit</span></router-link
        >
        <span @click="handleDelete" class="material-icons">delete</span>
      </div>
    </div>

    <div class="details" v-if="showDetails">
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "../firebase/config";
export default {
  props: ["post"],
  setup({ post },{emit}) {
    const showDetails = ref(false);
  
    const handleDelete = async () => {

      await projectFirestore.collection("posts").doc(post.id).delete();
      emit("delete",post.id)
    };

    return { post, handleDelete, showDetails };
  },
};
</script>

<style>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}
</style>