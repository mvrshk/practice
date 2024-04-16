document.querySelector('.more-button').addEventListener('click', toggleTrainer);

function toggleTrainer(index) {
    let button = document.querySelectorAll('.more-button')[index];
   document.querySelectorAll('.trainer-open')[index].classList.toggle('pokaz');
   if(button.value === "подробнее") {
    button.value = "скрыть";
   } else {
    button.value = "подробнее";
   }
}
function OpenWindow(){
    document.querySelector('.pop-up').classList.toggle('open-window');
    document.querySelector('body').classList.toggle('bgc');
}
function addShowClassToNav() {
    document.querySelector('.navigation').classList.toggle('show');
    document.querySelector('.burger-menu').classList.toggle('open');
}