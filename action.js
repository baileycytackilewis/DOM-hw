function main() {


    const addClass = document.getElementById('grow-me');

    addClass.classList.add('big');


   
    
    const removeClass = document.getElementById('shrink-me');

    removeClass.classList.remove('big');




const logText = document.querySelectorAll('li');

for(let li of logText) {
        console.log(li.innerText);
    };




    const linkFix = document.querySelector('.link');

linkFix.setAttribute('href', 'https://www.example.com');

const linkText = document.querySelector('a.link');

linkText.innerText = 'somewhere';

console.log(linkFix);




const hiding = document.getElementById('hide-me');

hiding.style.display = 'none'




const showing = document.getElementById('show-me');

showing.style.display = 'block'


    

const inputText = document.getElementById('name').value;

const welcome = document.querySelector('h1');

welcome.textContent = `Welcome ${inputText}`;

console.log(inputText)



};