
let menu=document.querySelector("#menu");
let navbar=document.querySelector('.navbar');


menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
   
};




let list=document.querySelectorAll('nav a');

list.forEach(li=>{
    li.addEventListener('click',function(){
        list.forEach(li=>li.classList.remove('active'));
        this.classList.add('active');
    });
});

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200

});

ScrollReveal().reveal('.homecontent,.heading', { origin: 'top' });
ScrollReveal().reveal('.img,.aboutimg,.servicescontainer,.Portfoliobox,.contact', { origin: 'bottom' });

ScrollReveal().reveal('.homecontent h1', { origin: 'left' });



/*https://script.google.com/macros/s/AKfycbzr6Gu7LmFercS_xK0osw1yhwHOtEfjflryE-VbIO4sHDTS7ZXy60ZXNmiMSInPRIY/exec*/