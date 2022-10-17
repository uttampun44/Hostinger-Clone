
function modal(){
   document.getElementById('modal').style.display = "block";
  
}

window.onload = function(){
    setTimeout(modal, 5000);
}
window.onclick = function(){
  document.getElementById('modal').style.display = "none"; 
}



// function scroll(){
//   if(document.body.scroll > 20 || document.documentElement.scrollTop > 20){
//      document.getElementsByClassName('nav-bar').style.top = "0";
//   }else{
//     document.getElementsByClassName('nav-bar').style.top = "50px";
//   }
// }


 