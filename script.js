let container = document.querySelector('.container'),// initialization of variables
    cells = container.querySelectorAll('.cell');

const removeClass = elems => {
  for (let i = 0; i < elems.length; i++) {
    elems[i].classList.remove('active-cell');//remove active class from all elements
  }
}
container.addEventListener('click', event => {
  removeClass(cells);
  event.target.classList.add('active-cell');//add active class to the target
});