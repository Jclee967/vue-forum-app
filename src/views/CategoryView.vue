<template>
  <h1 class="text-center">{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsInCategory(category)" />
</template>

<script setup>
import sourceData from '@/data.json'
import { defineProps, computed } from 'vue'
import ForumList from '../components/ForumList.vue'

const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

const category = computed(() => {
  return sourceData.categories.find((category) => category.id === props.id)
})

function getForumsInCategory(category) {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id)
}
</script>
