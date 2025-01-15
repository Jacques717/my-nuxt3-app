<template>
  <div class="welcome">
    <h1>Welcome to Our Store</h1>
    <p>Check out our <NuxtLink to="/products">products</NuxtLink>!</p>
  </div>
</template>

<style scoped>
.welcome {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #35495e;
}

a {
  color: #42b883;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style> 