function toggleActive(){
    let s_nav = document.getElementsByClassName("s-nav");
    for(let i = 0; i < s_nav.length; i++){
        s_nav[i].classList.toggle('active');
    }
}