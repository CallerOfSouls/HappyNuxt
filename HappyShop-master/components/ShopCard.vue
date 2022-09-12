<template>
 <div class=" bg-orange-300 bg-opacity-60 max-w-fit mx-1 my-2 rounded-md hover:bg-amber-200">
        <img :src="link" class=" rounded-md p-4 h-96 w-96">
        <div class=" bg-amber bg-opacity-50 rounded-md">
        <div class="text-center  ">
                <div class="flex flex-col">
                        <div class="font-bold">{{caption}}</div>
                        <div class="text-pink-700 text-sm">{{subcaption}}</div>
                </div>

                <div class="flex flex-row justify-center ">
                        <div class="font-bold">Price:</div><div class="text-pink-700"> {{price}}</div>
                </div>
        </div>
        </div>
        </div></template>
        <script lang="ts" setup>
        var props = defineProps<{link:string,caption:string,price:number,subcaption:string}>();
        </script>