let random_d1 = Math.floor(Math.random() * 6 ) + 1;
let random_d2 = Math.floor(Math.random() * 6 ) + 1;
console.log(random_d1, random_d2)

document.querySelector(".img1").setAttribute("src", `./images/dice${random_d1}.png`)
document.querySelector(".img2").setAttribute("src", `./images/dice${random_d2}.png`)

if (random_d1 == random_d2){
    document.querySelector("h1").innerHTML = "Draw"
}else if(random_d1 < random_d2){
    document.querySelector("h1").innerHTML = "Player 2 Win"
}else{
    document.querySelector("h1").innerHTML = "Player 1 Win"
}