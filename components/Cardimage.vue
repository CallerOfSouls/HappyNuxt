<template>
    <div>
           <div class="flex justify-center ">
            <img :src="link" class=" border-2 border-white  h-8/12 w-6/12 " alt="handmade" sizes="small" > 
            
         </div> <!--we are calling the name here, we are in html here so note that the lang is different, you tell the cs later that you want ts lang-->
    </div>
</template> 
<script lang="ts" setup>
var prop = defineProps<{link:string}>() // link is the name you could have named it anything like LandingPhotos
</script>
