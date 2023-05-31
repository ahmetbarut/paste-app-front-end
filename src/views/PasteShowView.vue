<script setup lang="ts">
import Paste from '@/types/Paste';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const paste = ref<Paste>();

onMounted(() => {
  axios.get('https://paste.ahmetbarut.net/api/pastes/' + route.params.id)
    .then(res => {
      paste.value = res.data;
    })
    .catch(err => {
      console.log(err);
    });
});
</script>
<template>
  <div class="paste h-screen flex">
    <div class="w-full bg-[#FEFEFE] p-3">
      {{ paste?.content }}
    </div>
  </div>
</template>
