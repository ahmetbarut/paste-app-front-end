<template>
  <main class="flex min-h-screen flex-col items-center p-12">
    <div class="flex flex-col items-center">
      <h1 class="font-bold text-2xl text-black">
        My Pastes
      </h1>
    </div>
    <div class="flex flex-col items-center w-1/2">
      <div class="grid grid-cols-1 gap-2 w-full">
        <PasteItem v-for="paste in pastes" :paste="paste" :key="paste.id"/>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import PasteItem from '@/components/PasteItem.vue';
import Paste from '@/types/Paste';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const pastes = ref<Paste[]>([]);

onMounted(() => {
  axios.get('http://127.0.0.1:8000/api/pastes')
    .then(res => {
      pastes.value = res.data;
    })
    .catch(err => {
      console.log(err);
    });
});
</script>
