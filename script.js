const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button-area .btn');
for(let btn of buttons){
    btn.addEventListener('click', function(event){
        const btnText = event.target.innerText;
        if(btnText == 'AC'){
            display.value = '';
        }
        else{
            display.value += event.target.innerText;
        }
    });
}
document.getElementById('equals-to').addEventListener('click', function(){
    if(display.value == ''){
        display.value = 0;
    }
    else{
        display.value = eval(display.value);
    }
})
