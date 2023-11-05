<template>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <PostList :posts="threadPosts" />
      <PostEditor @save="addPost"/>


    </div>
  </template>

<script setup>
import sourceData from '@/data.json'
import { ref, computed, defineProps } from 'vue'
import PostList from '../components/PostList.vue';
import PostEditor from '../components/PostEditor.vue'

// instead of using useRoute, define the id in props and add restriction
const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)


const thread = computed(()=>{
    return threads.value.find(thread => thread.id === props.id)
})

const threadPosts = computed(()=>{
    return posts.value.filter(p => p.threadId === props.id)
})

function addPost(eventData) {
    const postId = 'ggg' + Math.random()
    const newPost = {
        ...eventData.newPost,
        threadId: props.id
    }
    console.log(newPost)
    posts.value.push(newPost)
    threads.value.push(postId)
}

</script>

<style lang="scss" scoped>

</style>