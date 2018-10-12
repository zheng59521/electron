<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'vue_electron_element'
  }
</script>

<style>
  /* CSS */
  .text{
    animation: down 1s;
    animation-fill-mode: forwards;
    color:hotpink;
  }
  @keyframes down {
    from {
      opacity: 1;
    }
    to{
      opacity: 0;
      /* top:0; */
    }
  }
</style>
