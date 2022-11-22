// image slider functionality

let counter = 1;
setInterval(function(){
document.getElementById('radio' + counter).checker = true;
counter++
if(counter > 4){
    counter = 1;
}
}, 5000);