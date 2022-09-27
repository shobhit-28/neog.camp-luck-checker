let date = document.querySelector('#bDay');
let luckyNum = document.querySelector('#luckyNum');
let check = document.querySelector('.btn');
let declaration = document.querySelector('.declaration');
let add = 0;

check.addEventListener('click', function(){
    add = dateToInt(date.value);
    checkLuck(add);
})

function dateToInt(dti){
    dti = dti.replaceAll('-','');
    let sum = 0;
    for (let index = 0; index < dti.length; index++){
        sum += parseInt(dti.charAt(index));
    }
    return sum;
}

function checkLuck(cl){
    if (cl%luckyNum.value == 0) {
        declaration.innerHTML = 'YAY! Your birthday is lucky'
    } else {
        declaration.innerHTML = 'ALAS! Your birthday is not lucky'
    }
}
// Date Handler :-

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yy = today.getFullYear();
let oldYY = yy-100;
if (dd <= 9){
    dd = '0' + dd;
}
if (mm <= 9){
    mm = '0' + mm;
}
today = yy+'-'+mm+'-'+dd;
date.setAttribute('max', today);
let yesterday = oldYY+'-'+mm+'-'+dd;
date.setAttribute('min', yesterday);