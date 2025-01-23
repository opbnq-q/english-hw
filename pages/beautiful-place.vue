<template>
  <div class="w-screen h-screen flex items-center justify-center flex-col bg-black text-white">
    <button v-if="!view" @click="view = true" class="text-xl px-10 py-2 rounded-xl opacity-80 transition hover:opacity-100 hover:bg-white hover:text-black border border-white">Start</button>
    <div v-if="view" class="w-full h-full flex items-center justify-center overflow-hidden relative">
      <img v-if="showAd" @click="showAd = false" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEtNIdP6TL1xZ_XLdKwFrmTaGaIpY5N4QEw&s" class="absolute z-50 left-1/3 ad"/>
      <img :src="images[current]" class="min-w-[800px] min-h-[800px] max-h-[900px] object-contain" />
      <div class="fixed bottom-20 w-full flex items-center justify-between">
        <button class="bg-black py-4 px-8 mx-4 text-md font-bold rounded-md disabled:opacity-35 opacity-70 hover:opacity-100 transition" :disabled="current <= 0" @click="current--">previous</button>
        <h1>{{ current + 1 }}</h1>
        <button class="bg-black py-4 px-8 mx-4 text-md font-bold rounded-md disabled:opacity-35 opacity-70 hover:opacity-100 transition" :disabled="current >= images.length - 1" @click="current++">next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'beautiful-place-layout'
})


const images = Array.from({length: 13}, (_, i) => `/${i + 1}.png`)
console.log(images)

const view = ref(false)

const current = ref(0)

const showAd = ref(true)
</script>

<style>
.ad {
  animation: advert 2s 30s 1 both;
}

@keyframes advert {
  from {
    bottom: 100%;
  }

  to {
    bottom: 0
  }
}
</style>