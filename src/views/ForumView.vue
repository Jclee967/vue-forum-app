<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <router-link
        :to="{ name: 'threadCreate', params: { forumId: forum.id } }"
        class="btn-green btn-small"
        >Start a thread</router-link
      >
    </div>
  </div>

  <div class="col-full push-top">
    <ThreadList :threads="threads" />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import ThreadList from '../components/ThreadList.vue'
import { useStore } from 'vuex'
import { findById } from '../helpers'
const store = useStore()

const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

const forum = computed(() => {
  return findById(store.state.forums, props.id)
})

const threads = computed(() => {
  return store.state.threads.filter((thread) => thread.forumId === props.id)
})
</script>

<style lang="scss" scoped></style>
