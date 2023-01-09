//about me button coding
let button = document.getElementById('aboutButton');
let about = document.querySelector('#about p');
let closeButton = document.getElementById('closeButton');
function showAbout(){
    button.style.display = 'none';
    about.style.display = 'block';
    closeButton.style.display = 'block';
}

function showAboutButton(){
    button.style.display = 'block';
    about.style.display = 'none';
    closeButton.style.display ='none'
}

button.addEventListener('click',showAbout);
closeButton.addEventListener('click',showAboutButton);
