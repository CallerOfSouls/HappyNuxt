import { defineStore } from "pinia";
export const useNDQueryStore = defineStore('NDQuery',()=>{
const query = ref("");
function CreateQuery(queryString:string){
  query.value = queryString;
}

return {query,CreateQuery}
})