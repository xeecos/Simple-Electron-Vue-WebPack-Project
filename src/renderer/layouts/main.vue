<template>
  <div class="container">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/editor">Editor</router-link>
        <router-link to="/user/1">User</router-link>
        <router-link to="/help">Help</router-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<style>
    @import '../styles/style.css';
</style>