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
import ForumList from './ForumList.vue'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
  categories: {
    required: true,
    type: Array
  }
})

function getForumsInCategory(category) {
  return store.state.forums.filter((forum) => forum.categoryId === category.id)
}
</script>
