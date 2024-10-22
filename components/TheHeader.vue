<script setup lang="ts">

</script>

<template>
  <div class="header">
    <h1 class="logo">
      ikakprosto.ru
    </h1>
  </div>

  <div class="offset" />
</template>

<style scoped>
.offset {
  height: 76px;
}

.header {
  width: 100%;
  background: white;
  position: fixed;
  top: 0;
  height: 76px;
  padding: 16px;
  color: var(--primary);
  box-sizing: border-box;

  .logo {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
