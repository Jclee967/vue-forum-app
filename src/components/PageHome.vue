<template>
  <h1 class="text-center push-top">Welcome to the Forum</h1>
  <CategoryList :categories="categories" />
</template>

<script setup>
import CategoryList from './CategoryList.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const categories = computed(() => {
  return store.state.categories
})
</script>
