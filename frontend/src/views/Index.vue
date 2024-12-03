<template>
  <div>
    <Nav/>
    <div class="blog-card-cont" v-if="this.blogs">
        <router-link  v-for="(blog,index) in blogs" :key="index" class="blog-card" :to="{name: 'blogdetail', params:{id: blog.id}}">
            <div class="blog-child" >
                <h1>{{ blog.title }}</h1>
                <div class="blog-child-1">
                    <h3> written by :{{ blog.author }}</h3>
                    <h3> on: {{ blog.date }}</h3>
                </div>
            </div>
        </router-link>
    </div>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Nav from '@/components/Navbar.vue'
import Footer from "@/components/footer.vue"
import axios from 'axios';
export default {
components:{
    Nav,
    Footer
},
data() {
    return {
        blogs:[]
    }
},
async mounted(){
    try{
        const res = await axios.get('http://localhost:3000/blogs')
        this.blogs = res.data.reverse()
    }catch(err){
        console.log("the error is:",err)
    }
}
}
</script>

<style>

</style>