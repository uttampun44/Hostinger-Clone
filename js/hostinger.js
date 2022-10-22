
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

// getstarted button on click event

let getstarted = document.getElementById('started');


