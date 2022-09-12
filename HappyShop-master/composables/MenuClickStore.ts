import { defineStore } from "pinia";
export const useMenuClickStore = defineStore('MenuClick',()=>{
const click= ref(false);
const count = ref(0);
const openMenuID = reactive<ClickedObject[]>([]);
function addMenu():number{
    var val = count.value
openMenuID.push({clicked:false,ItemID:count.value});
count.value++;
return  val;
}
function getClicked(menuID:number){
  return  openMenuID.filter(e=>{
        if(e.ItemID == menuID){
            return true;
        }else{
                return false;
        }
    })[0].clicked
}
function setClicked(menuID:number){
   
    var menu = openMenuID.filter(e=>{
        if(e.ItemID == menuID){
            return true;
        }else{
                return false;
        }
    })[0];
       menu.clicked = !menu.clicked;
if(menu.clicked != false){
      openMenuID.map(e=>{
        if(e.ItemID != menuID){
            e.clicked = !menu.clicked;
        }
    })[0];

    
}
}
return {addMenu,getClicked, setClicked}
})

