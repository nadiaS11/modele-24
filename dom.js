let texts = document.querySelector('main').querySelector('h1');
function whenHovered(){
    texts.innerText = 'Hello Dom';
    texts.style.backgroundColor='plum'
}
texts.addEventListener('mouseover', whenHovered)

// adding event listener
let button = document.getElementById('myButton')
button.style.padding = '10px'
button.style.borderRadius = '5px'
button.style.backgroundColor = 'tomato';
button.style.border = 'none';


function whenClicked(){
    button.innerText = 'Button clicked!';
    button.style.backgroundColor = 'white';
    button.style.border = '2px solid tomato';

}
    
button.addEventListener('click', whenClicked)
