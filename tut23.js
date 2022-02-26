// console.log(Math.PI);
 

const setter = document.getElementById("setter");
const dateSet = document.getElementById(`dateSet`);


var time = window.setInterval(function() {
}, 500);

function whatisthis(){
    let date = new Date();
    // console.log(date);
    setter.innerHTML= date.getHours() + " " + date.getMinutes() + " " + date.getSeconds();
    dateSet.innerHTML = " date is " + date.getDate() + "th of " + date.toLocaleString('default', { month: 'long' });
}

setInterval(() => {
    whatisthis();
}, 500);

