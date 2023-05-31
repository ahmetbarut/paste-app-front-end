<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const content = ref('');

const submitForm = () => {
  axios.post('https://paste.ahmetbarut.net/api/pastes', {
    content: content.value
  })
    .then(res => {
      router.push({ name: 'paste-view', params: { id: res.data.id } });
    })
    .catch(err => {
      console.log(err);
    });
}

const cancel = () => {
  router.push({ name: 'home' });
}
</script>
<template>
  <div class="paste h-screen flex px-2">
    <div class="w-11/12">
      <textarea name="" id="" v-model="content"
        class="w-full h-screen bg-neutral-200/70 p-3 placeholder:text-black/20 placeholder:font-bold border border-blue-300 focus:border-blue-600"
        placeholder="Paste Here.."></textarea>
    </div>
    <div class="flex flex-col gap-4 w-1/12 justify-center mx-3">
      <button @click="submitForm" class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Save
      </button>
      <button @click="cancel" class="bg-orange-500 w-full hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Cancel
      </button>
    </div>
  </div>
</template>
