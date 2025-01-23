<template>
  <div class="w-screen h-screen flex items-center justify-center flex-col bg-black text-white">
    <button v-if="!view" @click="view = true" class="text-xl px-10 py-2 rounded-xl opacity-80 transition hover:opacity-100 hover:bg-white hover:text-black border border-white">Start</button>
    <div v-if="view" class="w-full h-full flex items-center justify-center overflow-hidden relative">
      <img v-if="showAd" @click="showAd = false" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEtNIdP6TL1xZ_XLdKwFrmTaGaIpY5N4QEw&s" class="absolute z-50 left-1/3 ad"/>
      <img :src="images[current]" class="min-w-[800px] min-h-[800px]" />
      <div class="fixed bottom-20 w-full flex items-center justify-between">
        <button class="bg-black mx-4 text-md font-bold rounded-md disabled:opacity-35 opacity-70 hover:opacity-100 transition" :disabled="current <= 0" @click="current--">previous</button>
        <button class="bg-black mx-4 text-md font-bold rounded-md disabled:opacity-35 opacity-70 hover:opacity-100 transition" :disabled="current >= images.length - 1" @click="current++">next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'beautiful-place'
})


const images = [
  'https://s09.stc.yc.kpcdn.net/share/i/12/11785922/de-1200x900.jpg',
  'https://gdb.rferl.org/9368e788-9cd7-4840-a8f8-3ac984bebf4f_w1080_h608_s.jpg',
  'https://gdb.rferl.org/8042877a-db59-4657-ba66-0dc5d249da89_cx0_cy2_cw97_w1200_r1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90Paz_ja8vAE1jO9iSQyR1AlB66CP7n02WQ&s'
]

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