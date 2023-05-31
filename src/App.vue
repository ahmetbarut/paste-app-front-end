<script setup lang="ts">

</script>

<template>
  <div>
    <div class="bg-neutral-100">
      <nav class="flex items-center p-4">
        <h1 class="text-2xl font-bold w-2/3 text-black">Paste</h1>
        <ul class="flex space-x-4">
          <li>
            <RouterLink class="text-black" :to="{name: 'home'}">Home</RouterLink>
          </li>
          <li>
            <RouterLink class="text-black" :to="{name: 'paste'}">Paste New</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="bg-neutral-200">
      <router-view />
    </div>
  </div>
</template>
