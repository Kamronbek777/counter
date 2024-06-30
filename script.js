let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let counter = document.querySelector('h1');

let count = 0;
counter.textContent = count;

minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);

function decrement(event) {
  event.preventDefault();
  count -= 1;
  counter.textContent = count;
}

function increment(event) {
  event.preventDefault();
  count += 1;
  counter.textContent = count;
}