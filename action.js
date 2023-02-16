function main() {

//Add the "big" class to the "grow-me" paragraph.

    const addClass = document.getElementById('grow-me');

    addClass.classList.add('big');



//Remove the "big" class from the "shrink-me" paragraph.
    const removeClass = document.getElementById('shrink-me');

    removeClass.classList.remove('big');




//Find all the <li>s and log their text content to the console.

const logText = document.querySelectorAll('li');

for(let li of logText) {
        console.log(li.textContent);
    };




//Set the href of the link to "https://www.example.com" and update the text 
//to say "somewhere" instead of "nowhere".

const linkFix = document.querySelector('.link');



linkFix.setAttribute('href', 'https://www.example.com');

const linkText = document.querySelector('a.link');

linkText.textContent = 'somewhere';

console.log(linkFix);



//Set the "display" CSS property of the "hide-me" paragraph to "none".

const hiding = document.getElementById('hide-me');

hiding.style.display = 'none'


//Set the "display" CSS property of the "show-me" paragraph to "block".

const showing = document.getElementById('show-me');

showing.style.display = 'block'

//Get the text that the user enters into the "name" input box and use 
//it to set a welcome message in the <h1>, e.g., "Welcome Grant!".
    
const inputText = document.getElementById('name').value;


const welcome = document.querySelector('h1');

welcome.textContent = `Welcome ${inputText}`;


console.log(inputText)



};