function navslide() {
    var hamburger=document.getElementsByClassName('hamburger')[0];
    var nav=document.getElementsByClassName('nav-links')[0];
    // var navlinks=document.querySelectorAll('.nav-links li');
    hamburger.addEventListener('click',function(){
        nav.classList.toggle('nav-active');  
        // navlinks.forEach((link,index)=>{
        //     if (link.style.animation) {
        //         link.style.animation="";
        //     } else {
        //         link.style.animation='navlinkfade 0.5s ease-in forwards ${index/7}s';
        // //     }
        // });
    });
}
navslide();