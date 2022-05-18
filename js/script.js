let box = document.getElementById("box")
// var left = 0;
// var topp = 0;

document.addEventListener("click", e => {

    box.style.left=e.clientX - box.offsetWidth/2+"px";
    box.style.top = e.clientY - box.offsetHeight/2+ "px";
    // let moveBox = false;
    // do {
        
    //     if (e.clientX > box.style.left && e.clientY > box.style.top) {
    //         moveBox = true;
    //     }

    //     left += 2;
    //     box.style.left = left + 'px';
    //     topp += 2;
    //     box.style.top = topp + 'px';
        
    // } while (moveBox);


})