
const container = document.querySelector('.container');
const gambartengah = document.querySelector('.gambartengah')


container.addEventListener('click',function(e){

    if(e.target.className == 'gambar'){
        gambartengah.src = e.target.src;
    }
});