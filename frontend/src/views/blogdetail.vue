<template>
  <div>
    <Navbar />
    <div v-if="blog" class="blog">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.des }}</p>
      <h4>by {{ blog.author }} on {{ blog.date }}</h4>
      <div class="blog-btn-cont">
        <button class="blog-btn" @click="deleteblog(blog.id)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="480" height="480">
            <path
              d="M21,4H6.109c-0.69,0-1.331,0.355-1.696,0.94L0,12l4.412,7.06C4.778,19.645,5.419,20,6.109,20H21c1.105,0,2-0.895,2-2V6 C23,4.895,22.105,4,21,4z M18,15.59L16.59,17L13,13.41L9.41,17L8,15.59L11.59,12L8,8.41L9.41,7L13,10.59L16.59,7L18,8.41L14.41,12 L18,15.59z"
       
            />
          </svg>delete
        </button>
        <router-link class="blog-btn" :to="{name:'edit', params:[blog.id]}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96">
            <path
              d="M19.171875 2C18.448125 2 17.724375 2.275625 17.171875 2.828125L16 4L20 8L21.171875 6.828125C22.275875 5.724125 22.275875 3.933125 21.171875 2.828125C20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5L3 17L3 21L7 21L18.5 9.5L14.5 5.5 z"
            />
          </svg> edit
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  components: {
    Navbar
  },
  props: ["id"],
  data() {
    return {
      blog: null
    };
  },
  mounted() {
    fetch("http://localhost:3000/blogs/" + this.id)
      .then(res => res.json())
      .then(data => (this.blog = data));
  },
  methods:{
    async deleteblog(id){
      try{
        const res = await axios.delete(`http://localhost:3000/blogs/${id}`)
        if(res){
          this.$router.push('/')
          alert('blog deleted successfully');
        }
      }catch(err){
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>