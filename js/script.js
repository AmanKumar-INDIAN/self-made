/**
 * @author Aman <greenworldhacker95@gmail.com>
 * @copyreight aman kumar 2023
 */

"use strict";


/**
 * light and dark mode
 */



const $themeBtn=document.querySelector("[data-theme-btn]");
const $html=document.documentElement;
const isdark=window.matchMedia("(prefers-color-scheme:dark)").matches



if(sessionStorage.getItem("theme")){
    $html.dataset.theme=sessionStorage.getItem("theme")
}else{
    $html.dataset.theme=isdark?"dark":"light";
 
}
const changetheme=()=>{
    $html.dataset.theme= sessionStorage.getItem("theme")==="light" ? "dark":"light";
sessionStorage.setItem("theme",$html.dataset.theme);
console.log("button")
}

$themeBtn.addEventListener("click",changetheme)


/***
 * TAB
 */

const $tabBtn=document.querySelectorAll("[data-tab-btn]");
let [lastActiveTab]=document.querySelectorAll("[data-tab-content]");
let [lastActiveTabBtn]=$tabBtn;

console.log(lastActiveTab)
console.log(lastActiveTabBtn)
$tabBtn.forEach(item =>{
    item.addEventListener("click",function(){
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");
console.log(item.dataset)
        const $tabContent=document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
       $tabContent.classList.add("active");
console.log($tabContent)
       this.classList.add("active");
       console.log(this)

       lastActiveTab=$tabContent;
       lastActiveTabBtn=this;



    })
})