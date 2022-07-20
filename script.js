// let sideBar = document.querySelector('.side-bar');

// document.querySelector('#menu-btn').onclick = () =>{
//     sideBar.classList.toggle('active');
// }

// document.querySelector('#close-side-bar').onclick = () =>{
//     sideBar.classList.remove('active');
// }

// window.onscroll = () =>{
//     sideBar.classList.remove('active');
   
// };

function classToggle() {
    const navs = document.querySelectorAll('.side-bar')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('#menu-btn')
    .addEventListener('click', classToggle);