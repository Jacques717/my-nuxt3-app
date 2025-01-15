<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Products</h1>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <li 
        v-for="product in products" 
        :key="product.id"
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
      >
        <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ product.name }}</h2>
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        <p class="text-lg font-bold text-emerald-600">
          ${{ product.price }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { gql } from 'graphql-tag'

const { $gqlClient } = useNuxtApp()
const products = ref([])

const query = gql`
  query {
    products {
      id
      name
      price
      description
    }
  }
`

try {
  const data = await $gqlClient.request(query)
  products.value = data.products
} catch (error) {
  console.error('Error fetching products:', error)
}
</script>