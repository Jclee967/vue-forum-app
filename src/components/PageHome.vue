<template>
  <h1 class="text-center">Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script setup>
import CategoryList from './CategoryList.vue'
import sourceData from '@/data.json'
import { ref } from 'vue'

const categories = ref(sourceData.categories)
</script>
