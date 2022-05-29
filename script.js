
const calcScreen = document.querySelector('.calc__screen-out'),
     calcBtns = Array.from (document.querySelectorAll('.calc_btn'));

calcBtns.map((btn)=>{
    btn.addEventListener('click', function (e) {
       let answer = e.target.innerHTML;

       if (answer == 'ac') {
        calcScreen.innerHTML = '' 
       } else {
        calcScreen.innerHTML = calcScreen.innerHTML + answer
       }
    })
    
})