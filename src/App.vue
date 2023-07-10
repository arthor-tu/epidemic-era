<script setup lang="ts">
import website from '@/config/website'
</script>

<template>
  <header>
    <div class="logo-wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="56" height="56" />
      {{ website.title }}
    </div>

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <main class="main-container">
    <RouterView class="main-wrapper" />
    <footer>
      <RouterLink to="/">{{ website.title }}</RouterLink> CopyRights@2023-2024
      <a href="https://beian.miit.gov.cn/" target="_blank"> {{ website.filing }} </a>
    </footer>
  </main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  padding: 0 1rem;
  /* border-bottom: 1px solid #e0e0e0; */
  box-shadow: 0 0 10px 4px #e0e0e0;
}
header .logo-wrapper {
  display: flex;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  font-size: 26px;
  line-height: 64px;
  align-items: center;
}
header .logo-wrapper img {
  margin-right: 2px;
}
header .wrapper {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
main {
  position: relative;
  min-height: calc(100vh - 64px);
}
main footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 1.5rem;
  line-height: 1.5;
  /* background: rgba(60, 60, 60, 0.05); */
  /* box-shadow: 0 0 10px 4px #e0e0e0 inset; */
}
.logo {
  display: inline-block;
}

nav {
  font-size: 16px;
  line-height: 4;
  text-align: right;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>

<style>
.main-wrapper {
  display: flex;
  min-height: calc(100vh - 64px - 1.5rem);
}
</style>
