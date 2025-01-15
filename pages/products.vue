<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
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