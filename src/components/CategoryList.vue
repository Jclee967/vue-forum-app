<template>
  <div class="col-full">
    <div class="forum-list">
      <ForumList
        v-for="category in categories"
        :key="category.id"
        :forums="getForumsInCategory(category)"
        :title="category.name"
        :categoryId="category.id"
      />
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import ForumList from './ForumList.vue'

const props = defineProps({
  categories: {
    required: true,
    type: Array
  }
})

function getForumsInCategory(category) {
  return sourceData.forums.filter((forum) => forum.categoryId === category.id)
}
</script>
