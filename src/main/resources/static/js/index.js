function toggleActive(){
    let s_nav = document.getElementsByClassName("s-nav");
    if(s_nav){
        for(let i = 0; i < s_nav.length; i++){
            s_nav[i].classList.toggle('active');
        }
    }

}

function changeMode(selectedMode){
    let elements = document.querySelectorAll(".light, .dark, .blue");
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove("light", "dark", "blue");
    }

    if(selectedMode === "light"){
        elements.forEach(e => {
            e.classList.add("light");
        })
    }
    if(selectedMode === "dark"){
        elements.forEach(e => {
            e.classList.add("dark");
        })
    }
    if(selectedMode === "blue"){
        elements.forEach(e => {
            e.classList.add("blue");
        })
    }
}