
// modal
function modal(){
   document.getElementById('modal').style.display = "block";
  
};

// modal pop after 5 seconds
window.onload = function(){
    setTimeout(modal, 5000);
};

// pop up modal click outside
window.onclick = function(){
  document.getElementById('modal').style.display = "none"; 
};

// navbar scrolling
window.addEventListener('scroll', () =>{
  let scroll = document.querySelector('.nav-bar');
  scroll.classList.toggle('sticky', window.scrollY >50);
  let login = document.getElementById('login');
  login.classList.toggle('login', window.scrollY >50);
});

// hamburger menu on mobile view
let hamburger = document.getElementById('hamburger');
let navmenu  = document.querySelector('.nav-menu');
let times =   document.getElementById('times');

hamburger.addEventListener('click', () =>{
 navmenu.classList.toggle('navbar');
 navmenu.classList.remove();
 console.log(navmenu);
 
  if(hamburger){
    for(let i = 0; i<hamburger.clientHeight; i++){
    hamburger.style.display = "none";
    times.style.display = "block";
  }
}
  });

  times.addEventListener('click', function(){
      hamburger.style.display = "block";
      times.style.display = "none"; 
      console.log("Hello");
  });

