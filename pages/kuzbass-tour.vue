<script lang="ts" setup>
definePageMeta({
  layout: 'beautiful-place-layout'
})

const images = Array.from({length: 13}, (_, i) => `/beautiful-place/${i + 1}.png`)

const started = ref(false)

const current = ref(0)
</script>

<template>
    <div class="w-screen h-screen flex items-center justify-center flex-col gap-4 bg-black text-white">
        <h1 v-if="!started" class="text-7xl font-black">KUZBASS TOUR</h1>
        <button v-if="!started" @click="started = true" class="text-xl font-semibold px-10 py-2 rounded-xl opacity-80 transition hover:opacity-100 hover:bg-white hover:text-black border-2 border-white">Start</button>
        <div v-if="started" class="w-full h-full flex items-center justify-center overflow-hidden relative">
            <div>
                <img v-for="(image, index) in images" :key="index" :src="image" :style="{ display: index === current ? 'block' : 'none' }" class="max-w-full max-h-screen min-w-[800px] min-h-[800px] object-contain" />
            </div>
            <div class="absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-between">
                <button class="mx-4 p-2 aspect-square bg-black bg-opacity-40 rounded-full text-3xl disabled:opacity-35 opacity-70 hover:opacity-100 transition" :disabled="current <= 0" @click="current--">
                    <Icon name="material-symbols:arrow-back-rounded" />
                </button>
                <button class="mx-4 p-2 aspect-square bg-black bg-opacity-40 rounded-full text-3xl disabled:opacity-35 opacity-70 hover:opacity-100 transition" :disabled="current >= images.length - 1" @click="current++">
                    <Icon name="material-symbols:arrow-forward-rounded" />
                </button>
            </div>
            <h1 class="px-4 py-1 rounded-2xl bg-black bg-opacity-40 absolute bottom-10 text-lg font-semibold">{{ current + 1 }} / {{images.length}}</h1>
        </div>
  </div>
</template>
