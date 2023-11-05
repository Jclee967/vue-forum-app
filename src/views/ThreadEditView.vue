<template>
  <div class="col-full push-top">
    <h1>
      Editing <i>{{ thread.title }}</i>
    </h1>
    <ThreadEditor :title="thread.title" :text="text" @save="save" @cancel="cancel" />
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
  id: {
    type: String,
    required: true
  }
})

const thread = computed(() => {
  return findById(store.state.threads, props.id)
})

const text = computed(() => {
  return findById(store.state.posts, thread.value.posts[0]).text
})

async function save({ title, text }) {
  const thread = await store.dispatch('updateThread', {
    id: props.id,
    title: title.value,
    text: text.value
  })
  router.push({ name: 'thread', params: { id: thread.id } })
}

function cancel() {
  router.push({ name: 'thread', params: { id: thread.id } })
}
</script>
