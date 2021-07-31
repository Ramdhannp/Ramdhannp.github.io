const nav = document.getElementById('nav');

function runPopup(){
    window.alert('Maaf, belum tersedia')
}

window.addEventListener('scroll', function() {
    scrollposition = window.scrollY;

    if (scrollposition >= 60){
        nav.classList.add('nav-white');
    } else if (scrollposition <= 60){
        nav.classList.remove('nav-white');
    }
})