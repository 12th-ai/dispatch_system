<template>
  <div class="notfound">
    <h1>404</h1>
    <p>no page found</p>
    <router-link to="/" >go back</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.notfound{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 30px;
  h1{
      font-size: 5.6rem;
  }
  p{
    font-size: 2.5rem;
  }
}
body{
  background: black;
}
</style>