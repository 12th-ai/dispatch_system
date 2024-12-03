<template>
  <div>
    <!-- Conditionally show the GlobalLoader based on isLoading state -->
    <GlobalLoader v-if="isLoading" />
    
    <!-- RouterView will display the component when it's loaded -->
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import GlobalLoader from '@/widget/GlobalLoader.vue'; // Import the loader component
import { isLoading } from '@/router'; // Import isLoading state from router
</script>
