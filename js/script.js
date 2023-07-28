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
}

$themeBtn.addEventListener("click",changetheme)