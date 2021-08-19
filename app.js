const smileFace = document.querySelector('.smile');
const starFace = document.querySelector('.star');


smileFace.addEventListener('click',()=>{
    if(starFace.classList.contains('star')){
        starFace.classList.add('active');
        smileFace.classList.remove('active');
    }
})

starFace.addEventListener('click',()=>{
    if(smileFace.classList.contains('smile')){
        smileFace.classList.add('active');
        starFace.classList.remove('active');
    }
})