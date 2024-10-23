<template>
  <div class="bg-primary-background mt-5 rounded-2xl p-[12px_20px] border-primary-border border-[1px] w-full min-h-20">
    <div class="flex items-center gap-2">
      <div class="relative">
        <img class="rounded-full h-7 w-7 absolute z-10 blur-md"
          :src="props.avatar" />
        <img class="rounded-full h-7 w-7 relative z-20"
        :src="props.avatar" />
      </div>

      <Text>{{ props.author }}</Text>
    </div>
    <Text class="mt-2">{{ props.content }}</Text>
  </div>
</template>

<script lang="ts" setup>
import type { IComment } from '~/models/IComment';

const props = defineProps<IComment>()
</script>

<style>

</style>