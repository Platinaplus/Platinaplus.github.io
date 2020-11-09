window.addEventListener("DOMContentLoaded", function () {

  const btnShowMore = document.querySelector('.gallery__more');
  const hiddenElements = document.querySelectorAll('.gallery__item--hidden');

btnShowMore.addEventListener('click', function(e){
  e.preventDefault();

  if (btnShowMore.dataset.option == 'hidden') {
    hiddenElements.forEach(element => {
      element.classList.remove('gallery__item--hidden');
    
  })
  btnShowMore.dataset.option = 'visible';
  btnShowMore.innerText = 'Скрыть';
}
  else if (btnShowMore.dataset.option == 'visible') {
    hiddenElements.forEach(element => {
      element.classList.add('gallery__item--hidden');
    });
    btnShowMore.dataset.option = 'hidden';
    btnShowMore.innerText = 'Показать еще';
}
});

const buttons = document.querySelectorAll('.gallery__btn')
const photos = document.querySelectorAll('.gallery__item')

buttons.forEach(button => {
  button.addEventListener('click', function(){
    let filter = button.dataset.filter;
    photos.forEach(photo => {
      if (filter == "all") {
        if (!photo.classList.contains('gallery__item--hidden')){
          photo.style.display = "block";
        }
      }
      else if (photo.classList.contains(filter.slice(1))){
        if (!photo.classList.contains('gallery__item--hidden')){
          photo.style.display = "block";
        }
        
      } else {
        photo.style.display = "none";
      }
    })

    });
  });

});


