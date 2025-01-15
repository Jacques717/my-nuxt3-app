<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm p-4 mb-8">
      <div class="container mx-auto">
        <NuxtLink 
          to="/" 
          class="text-emerald-600 hover:text-emerald-800 px-2 py-1 rounded-md transition-colors"
        >Home</NuxtLink>
        <span class="text-gray-400">|</span>
        <NuxtLink 
          to="/products" 
          class="text-emerald-600 hover:text-emerald-800 px-2 py-1 rounded-md transition-colors"
        >Products</NuxtLink>
      </div>
    </nav>
    <div class="container mx-auto px-4">
      <NuxtPage />
    </div>
  </div>
</template>
