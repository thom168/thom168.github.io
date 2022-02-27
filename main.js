function tog(x) {
    elm = document.getElementById(x)
    y = elm.style.display
    elm.style.display = (y==="inline") ? "none" : "inline"
}

function my_function() {
    numProofs = 10 //just an upper bound
    for(i=1; i<=numProofs; i++){
    let str = i.toString();
    elm = document.getElementById(str)
    if(elm) {
    elm.innerHTML = "<u>proof</u>"
    elm.addEventListener("click", function(e) {
        pstr = 'p' + str
        tog(pstr)
    }, false);
}
    else
        console.log(i)
}
}