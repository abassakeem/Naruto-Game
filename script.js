
const naruto = document.getElementById("naruto");
const cactus = document.getElementById("cactus");

function jump() {
    if (naruto.classList != "jump"){
    naruto.classList.add("jump");
    setTimeout(function (){
        naruto.classList.remove("jump");
    }, 300)
}
}
let isAlive = setInterval(function(){

    //get current cactus y position
    let narutoTop =  parseInt(window.getComputedStyle(naruto).getPropertyValue("top"));
    console.log(narutoTop);
    //get current cactus x position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    console.log(cactusLeft);


        if (cactusLeft <37 && cactusLeft > 0 && narutoTop >=140){
            //collision
            
           if(confirm("Game Over"))
           window.location.reload();
        }

}, 10);


document.addEventListener("keydown", function (event){
    jump();
});