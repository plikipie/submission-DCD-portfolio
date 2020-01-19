const gallery = document.querySelector('.gallery'); 
const photo = document.querySelector('.photo');
const thumbs = document.querySelectorAll('.thumb');

gallery.addEventListener('click', function(e){
    //cek apakah yang diklik adalah thumb
    if(e.target.className == 'thumb') {
        photo.src = e.target.src;
        photo.classList.add('fade');
        setTimeout(function() {
            photo.classList.remove('fade');
        },500);
        
        thumbs.forEach(function(thumb){
            thumb.className = 'thumb';  
        });
        e.target.classList.add('active');

    }
});