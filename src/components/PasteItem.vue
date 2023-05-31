<script setup lang="ts">
import Paste from '@/types/Paste'
import { useClipboard } from '@vueuse/core'
import { defineProps, ref, PropType, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const props = defineProps({
    paste: {
        type: Object as PropType<Paste>,
        required: true
    }
})

const source = ref()

const { copy, copied, isSupported } = useClipboard({ source })


onMounted(() => {
    source.value = window.location.origin + '/paste/' + props.paste.id
})

</script>
<template>
    <div class="w-full bg-white border rounded-sm p-3 relative">
        <div class="w-full">
            <h3 class="text-xl text-black">
                {{ paste.title }}
            </h3>
            <p class="text-black">
                {{ paste.content.substring(0, 100) }}
            </p>
        </div>
        <div class="absolute top-0 right-0 flex">
            <div class="flex gap-2 justify-between p-1 rounded-md text-white">
                <button class="bg-green-500 text-white p-1" @click="copy(source)" v-if="isSupported">
                    <span v-if="!copied">
                        Copy Link
                    </span>
                    <span v-else>
                        Copied!
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>