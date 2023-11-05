<template>
  <div class="col-large push-top">
    <h1>
      {{ thread.title }}
      <router-link
        :to="{ name: 'threadEdit', id: this.id }"
        class="btn-green btn-small"
        tag="button"
      >
        Edit Thread
      </router-link>
    </h1>
    <PostList :posts="threadPosts" />
    <PostEditor @save="addPost" />
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import PostList from '../components/PostList.vue'
import PostEditor from '../components/PostEditor.vue'
import { useStore } from 'vuex'
import { findById } from '../helpers'
const store = useStore()

// instead of using useRoute, define the id in props and add restriction
const props = defineProps({
  id: {
    required: true,
    type: String
  }
})

const threads = computed(() => {
  return store.state.threads
})

const posts = computed(() => {
  return store.state.posts
})

const thread = computed(() => {
  return findById(threads.value, props.id)
})

const threadPosts = computed(() => {
  return posts.value.filter((p) => p.threadId === props.id)
})

function addPost(eventData) {
  const newPost = {
    ...eventData.newPost,
    threadId: props.id
  }
  store.dispatch('createPost', newPost)
}
</script>

<style lang="scss" scoped></style>
