<template>
    <h1 class="text-center">Welcome to the Forum</h1>
    <ThreadList :threads="threads"/>
</template>

<script setup>
import ThreadList from './ThreadList.vue';
import sourceData from '@/data.json'
import { ref } from 'vue'

const threads = ref(sourceData.threads)

</script>

