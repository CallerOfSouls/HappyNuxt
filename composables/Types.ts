interface DropDownItem{
    title:string;
    type:string;
    description:string
   }
   interface DropDownProps{
    title:string;
    items:DropDownItem[];

}
interface ClickedObject{
    clicked:boolean;
    ItemID:number

}