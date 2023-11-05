<template>
    <div class="col-full">
        <form @submit.prevent="save">
            <div class="form-group">
            <textarea v-model="text" name="" id="" cols="30" rows="10" class="form-input"/>
            </div>
            <div class="form-actions">
            <button class="btn-blue">Submit post</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, defineEmits , defineProps } from 'vue'

const text = ref('')
const emit = defineEmits(['save'])

function save() {
    const postId = 'ggg' + Math.random()
    const newPost = {
        post: postId,
        text: text.value,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: '',
        userId: 'rpbB8C6ifrYmNDufMERWfQUoa202'
    }

    emit('save', { newPost })
    text.value = ''

}

</script>

