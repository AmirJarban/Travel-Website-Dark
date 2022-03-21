let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let controlBtn = document.querySelectorAll('.about .video-container .controls .control-btn');
let video = document.querySelector('.about .video-container .video');


// menu hide and unhide
menuBtn.addEventListener('click' , () =>{
    navbar.classList.toggle('active')
})



// video btn controls
controlBtn.forEach(btn => {
    btn.addEventListener('click',() =>{
        let src = btn.getAttribute('data-src');
        video.src = src;
    })
})


// scroll
window.onscroll = () => {
    navbar.classList.remove('active');
}