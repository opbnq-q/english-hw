<script lang="ts" setup>
definePageMeta({
  layout: 'beautiful-place-layout'
})

const images = Array.from({length: 13}, (_, i) => `/kuzbass-tour/${i + 1}.jpg`)

const started = ref(false)

const current = ref(0)
</script>

<template>
    <div class="w-screen h-screen flex items-center justify-center flex-col bg-black text-white">
        <div v-if="!started" class="w-max flex flex-col gap-2">
            <ul class="text-7xl font-black">
                <li><span class="text-pink-600">F</span>ood</li>
                <li><span class="text-lime-400">U</span>niversity</li>
                <li><span class="text-red-500">C</span>ulture</li>
                <li><span class="text-amber-400">K</span>uzbass</li>
            </ul>
            <h2 class="text-3xl font-bold">One-day insiders guide.</h2>
            <button @click="started = true" class="mt-2 text-xl font-semibold px-10 py-2 rounded-xl opacity-80 transition hover:opacity-100 hover:bg-white hover:text-black border-2 border-white">Start</button>
        </div>
        <div v-if="started" class="w-full h-full flex items-center justify-center overflow-hidden relative">
            <div>
                <NuxtImg v-show="index === current" v-for="(image, index) in images" :key="index" :src="image" class="max-w-full max-h-screen min-w-[800px] min-h-[800px] object-contain" />
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
