<template>
  <div class="col-full push-top">
    <h1>
      Create new thread in <i>{{ forum.name }}</i>
    </h1>
    <ThreadEditor @save="save" @cancel="cancel" />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import router from '../router'
import ThreadEditor from '../components/ThreadEditor.vue'
import { findById } from '../helpers'

const store = useStore()

const props = defineProps({
  forumId: {
    type: String,
    required: true
  }
})

const forum = computed(() => {
  return findById(store.state.forums, props.forumId)
})

async function save({ title, text }) {
  const thread = await store.dispatch('createThread', {
    forumId: props.forumId,
    title: title.value,
    text: text.value
  })
  router.push({ name: 'thread', params: { id: thread.id } })
}

function cancel() {
  router.push({ name: 'forum', params: { id: props.forumId } })
}
</script>
