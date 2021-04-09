/*(function () {
    var n = 1;
function doit() {
    console.log("Number", n++)
}

doit()
doit()
doit()
})()*/

let offset = 0;
const sliderLine= document.querySelector('.slider_line');
 
document.querySelector('.button_right').addEventListener('click', function() {
     offset = offset + 550;
     if (offset > 1100) {
         offset = 0;
     }
     sliderLine.style.left = -offset + 'px';
     
});

document.querySelector('.button_left').addEventListener('click', function() {
    offset = offset - 550;
    if (offset < 0) {
        offset = 1100;
    }
    sliderLine.style.left = -offset + 'px';
});
