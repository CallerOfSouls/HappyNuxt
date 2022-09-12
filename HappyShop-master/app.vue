<template>
    <div class="bg-rose-400  h-20">
        <div class= " tracking-wider font-playfair p-2 flex justify-center font-bold text-xl text-white">
                The Happy Gift Shoppe 
        </div>
        <nav class = " bg-rose-300 font-playfair w-100 flex flex-row justify-evenly" >
            <NavItem link="/Artwork" >Artwork</NavItem>         

          <DropDown v-for="p in menus" :dropdown-properties="p"/>
        </nav>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
  
import axios from 'axios';




var menus = reactive<DropDownProps[]>([]);

onBeforeMount(()=>{
 Load();
});

function Load(){

  GetDropdowns().then(data=>{return menus.values = data.values});
 
}

async function GetDropdowns(){
  var client = useSupabaseClient();
  var items:DropDownProps[]=[];

  await client.from("menus").select('*').then((data)=>{

    (data.data).forEach(data=>{
      let title = data.value;

    let item:DropDownItem[]=[];
   client.from("dropdowns").select('*').eq('menuid',data.menuid).then(data2=>{
    
        (data2.data).forEach(element => {
    
        item.push({title:element.value,type:element.type,description:""});
      })
      menus.push({title:title,items:item});
    
      item = [];
    });
  });
    })
   
return  menus;
}
</script>
<style lang="scss">    body{
    background-image: url("./assets/oldpaper2.jpg");
   }
</style>