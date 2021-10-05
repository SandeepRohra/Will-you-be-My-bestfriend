 var respond =document.querySelector(`.respond`)

function respond1(){
 var answer =prompt(`type Yes or No `)
if (answer === `Yes` ){
document.querySelector(`.h`).textContent = `I can't tell you Kashish how happy I am , yay now we are bestfriends😄😄`;
document.querySelector(`.respond`).classList.add(`hidden`)
}
else if(answer === `No`){
  document.querySelector(`.h`).textContent = `Ok Kashish i respect your choice 😇`;
  document.querySelector(`.respond`).classList.add(`hidden`)
}
else if( answer !== `Yes` && answer!== `no`){
  alert(`Please answer in Yes or No`)
}
}
document.querySelector(`.respond`).addEventListener(`click`,respond1)
