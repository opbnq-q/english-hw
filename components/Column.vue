<template>
  <article class="w-full flex flex-col items-center">
    <div class="relative">
      <img class="w-80 absolute z-10 blur-3xl opacity-50 rounded-2xl" :src="props.image" />
      <img class="w-80 relative z-20 rounded-2xl" :src="props.image" />
    </div>
    <div
      class="w-80 border-primary-border border-[1px] min-h-32 bg-primary-background mt-5 rounded-2xl p-[12px_20px] relative"
      @click="showFull = !showFull">
      <Title class="mb-5">{{ props.title }}</Title>
      <div :class="`mb-5 ${!showFull && 'max-h-40 relative overflow-hidden'}`">
        <slot></slot>
      </div>
      <p class="text-zinc-500 text-sm absolute bottom-2 right-4">
        {{ props.date }}
      </p>
    </div>
    <div class="mb-10 w-80">
      <Title class="mt-5">Comments</Title>
      <Comment v-for="comment in props.comments" :author="comment.author" :avatar="comment.avatar" :content="comment.content" />
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { IColumn } from '~/models/IColumn';
import Title from './Title.vue';

const props = defineProps<IColumn>()
const showFull = useState(() => false)
</script>

<style></style>