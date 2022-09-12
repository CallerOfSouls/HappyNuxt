<template>
 <div class=" border-1-gray-500 p-1 text-center min-w-fit w-48 hover:bg-red-200 h-fit text-white text-md font-bold font-sans"><a :href="link" class="h-full w-full text-center"><slot></slot></a></div>
</template>

<!-- https://tailwind-elements.com/docs/standard/components/images/ this will help you size the image -->

<script lang="ts" setup>
    var props=defineProps<{link:string}>()
</script>

