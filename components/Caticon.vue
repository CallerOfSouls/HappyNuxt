<template>
    <div>
           <div class="flex justify-start ring-offset-fuchsia-200 ">
            <img :src="link" class=" border-4 border-white  " alt="handmade" sizes="small" > 
            
         </div> <!--we are calling the name here, we are in html here so note that the lang is different, you tell the cs later that you want ts lang-->
    </div>
</template> 
<script lang="ts" setup>
var prop = defineProps<{link:string}>() // link is the name you could have named it anything like LandingPhotos
</script>
