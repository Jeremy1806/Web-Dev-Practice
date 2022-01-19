const btn = document.querySelector('button');
var hu = document.querySelector('h1');
btn.addEventListener('click',() => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    if(r<30 && g<30 && b<30){
        hu.style.color= "white";
    }

    const newColour = `rgb(${r}, ${g}, ${b})`;
    hu.innerText = newColour;
    document.body.style.backgroundColor = newColour;
});