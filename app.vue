<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/products">Products</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<style>
nav {
  padding: 1rem;
  margin-bottom: 2rem;
}

nav a {
  color: #42b883;
  text-decoration: none;
  margin: 0 0.5rem;
}

nav a.router-link-active {
  color: #35495e;
  font-weight: bold;
}
</style>
