<!-- src/layouts/BlogLayout.vue -->
<template>
  
  <div id="layout-wrapper">
    <Sidebar />
    <main>
      <TopBar />
      <router-view></router-view>
    </main>

 
  </div>
</template>

<script>

import Sidebar from '../components/Sidebar.vue'; 
import TopBar from '../components/TopBar.vue';


export default {
  name: 'ProtectedLayout',
  components: {
    Sidebar,
    TopBar
  }
}
</script>
