<template>
  <div class="container">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/editor">Editor</router-link>
        <router-link to="/user/1">User</router-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<style>
    @import '../styles/style.css';
</style>
<style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 15px 30px;
    background: #f9f7f5;
  }
</style>
