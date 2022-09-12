<template>
    <div  @click="SetClick" class="">
      <div >
        <NavItem link="#">{{props.dropdownProperties.title}}</NavItem>
      </div>
           
            <div v-show="clicked||closing" ref="Slide" class="w-48   bg-red-200 bg-opacity-50 shadow-md absolute rounded-b-md  " >
            
            <div v-for="items in props.dropdownProperties.items"  ref="Dropdowns" class="text-center border-w-80 hover:bg-red-300 bg-opacity-50 bg-white   w-full h-full itemAnim inline-block relative"><a class="text-center" >{{items.title}}</a></div>
          
     
     
        </div>
    
            
    
      
    </div>
    </template>
    <script setup lang="ts">
        
    
    
    
        var props = defineProps<{dropdownProperties:DropDownProps}>()
        var store = useMenuClickStore();
        var id= ref(store.addMenu());
        var Slide = ref<HTMLElement>(null);
            var Dropdowns = ref<HTMLElement[]>([]);
            var closing = ref(false);
       var clicked = computed(()=>{
    
    return store.getClicked(id.value);
    
       });
    
    watch(clicked,(click,click2)=>{
    if(click == false && click2 == true){
      Slide.value.style.display = "initial";
        closing.value = true;
        if(Slide.value.classList.contains("growDown") ){
            Slide.value.classList.replace("growDown","slideUp");
        }else{
          Slide.value.classList.add("growDown");
        }
    
        Dropdowns.value.map((e)=>{
            e.classList.replace("itemAnim","itemAnimHide")
        })
        
     
       
        setTimeout(() => {
          Slide.value.style.display = "none";
        }, 300);
    
    closing.value = false
    
    } else{
    
            Slide.value.classList.replace("slideUp","growDown");
         
            Dropdowns.value.map((e)=>{
            e.classList.replace("itemAnimHide","itemAnim")
            });
    }
    })
    function SetClick(){
       
    
     store.setClicked(id.value);
     setTimeout(() => {
      
    }, 1000);
        
       
       
       }
       
    
    
    
    </script>
    <Style scoped lang="scss"> 
    
    
    
    .growDown{
       
    
      animation: GrowHeight;
      animation-duration: 0.3s;
      transition: max-height ease-in;
      transition-duration: 0.5s;
     
    
    }
    
    .slideUp{
       
    
       animation: ShrinkHeight;
       animation-duration: 0.3s;
       transition: max-height ease-in;
       transition-duration: 0.5s;
      
     
     }
    .itemAnim{
       
      animation: showItem;
      animation-duration: 0.3s;
      transition-delay: 0;
      transition: transform ease-in;
      transition-duration: 0.1s;
    }
    .itemAnimHide{
      
      animation: hideItem;
      animation-duration: 0.3s;
      transition-delay: 0;
      transition: transform linear ;
      transition-duration: 0.1s;
    }
    @keyframes showItem {
      from {
        transform: scaleY(0);
      }
      to {
        transform: scaleY(1);
      }
    }
    @keyframes hideItem {
      from {
        transform: scaleY(1);
      }
      to {
        transform: scaleY(0);
      }
    }
    @keyframes GrowHeight {
      from {
        max-height: 0%;
    
      }
      to {
        max-height: 100%; /* your line height here */
       
      }
      
    }
    @keyframes ShrinkHeight {
      from {
        max-height: 100%;
    
      }
      to {
        max-height: 0; /* your line height here */
       
      }
      
    }
    
    </Style>