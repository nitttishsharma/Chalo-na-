const b = document.querySelector("button.button--no")
b,addEventListener("mouseover",moveHover)

function moveHover(){
    const i=Math.floor(Math.random()*500)+1 ;
    const j=Math.floor(Math.random()*900)+1 ;
    b.style.left =i+"px"
    b.style.top =j+"px"
}

const c = document.querySelector("button.button--yes")
c,addEventListener("click",CLiked)

function CLiked(){
    alert("Ok")
}
