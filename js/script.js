window.addEventListener("DOMContentLoaded", function () {
const btnShowMore = document.querySelector('.gallery__more');
const hiddenElements = document.querySelectorAll('.gallery__item--hidden');

btnShowMore.addEventListener('click', function(e){
  e.preventDefault();

  if (btnShowMore.dataset.option == 'hidden') {
    hiddenElements.forEach(element => {
    element.style.display = 'block';
  })
  btnShowMore.dataset.option = 'visible';
  btnShowMore.innerText = 'Скрыть';
}
  else if (btnShowMore.dataset.option == 'visible') {
    hiddenElements.forEach(element => {
      element.style.display = 'none';
    });
    btnShowMore.dataset.option = 'hidden';
    btnShowMore.innerText = 'Показать еще';
}
});
});


