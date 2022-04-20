// 1
const xMen = document.getElementById(`xMen`);
// 2
const centered = document.getElementsByClassName(`center`);
// 3
const batman = document.querySelector('#batman');
// 4
const h3s = document.querySelectorAll('h3');
// 5
const h1 = document.querySelector(`h1`);
h1.innerText = `The Best Animated Superhero TV Shows EVER!`;
// 6
const honorableMentions = document.querySelector(`#honorable-mentions`);
honorableMentions.innerHTML = `<p>OTHER GREAT SHOWS</p>`;
// 7
const aTag = document.querySelector(`a `);
aTag.setAttribute(`href`, `https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/`);
// 8
h1.classList.add(`background`, `text-color`);
// 9
h1.classList.remove('background');
// 10
const body = document.querySelector(`body`);
const h4 = document.createElement(`h4`);
h4.innerText = "Is Avatar: The Last Airbender a superhero show?"
body.prepend(h4);
// 11
const h5 = document.createElement(`h5`);
h5.innerText = "Heroes in the half shell Turtle Power!";
aTag.insertAdjacentElement(`afterend`, h5);
// 12
const li = document.querySelector('ul > li');
li.remove();