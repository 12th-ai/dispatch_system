<template>
  <div>
    <div class="form-cont" v-if="blog">
      <form action="" class="form" @submit.prevent="editblog(blog.id)">
        <label for="">title:</label>
        <input type="text" required v-model="blog.title">
        <label for="">author:</label>
        <input type="text" required v-model="blog.author">
        <label for="">date:</label>
        <input type="datetime-local" required  v-model="blog.date">
        <label for="">blog</label>
        <textarea required  v-model="blog.des" ></textarea>
        <button>edit blog</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
    props:['id'],
    data() {
        return {
            blog: null
        }
    },
    mounted(){
        fetch('http://localhost:3000/blogs/' + this.id)
        .then(res => res.json())
        .then(data => this.blog = data)
    },
    methods:{
        editblog(id){
            fetch('http://localhost:3000/blogs/' + id,{
                method: 'PUT',
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(this.blog)
            })
            .then(res => res.json())
            .then(data => {
                console.log('sucess')
                window.location.reload(true)
                this.$router.go(-1)
            })
        }
    }
}
</script>

<style>

</style>