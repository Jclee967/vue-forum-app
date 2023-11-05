<template>
  <h1 class="text-center">{{ category.name }}</h1>
  <ForumList :title="category.name" :forums="getForumsInCategory(category)" />
</template>

<script setup>
import { defineProps, computed } from 'vue'
import ForumList from '../components/ForumList.vue'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

const category = computed(() => {
  return store.state.categories.find((category) => category.id === props.id)
})

function getForumsInCategory(category) {
  return store.state.forums.filter((forum) => forum.categoryId === category.id)
}
</script>
