window.addEventListener("DOMContentLoaded", function () {
  class GalleryItem {
    constructor(src, alt, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "gallery__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
        <img src=${this.src} alt = ${this.alt}>
        <a class="gallery__link"></a>
        `;

      this.parent.append(element);
    }
  }

  const btnShow = document.querySelector(".gallery__more");
  
  
  btnShow.addEventListener("click", function () {
    const galleryMore = document.querySelector('.gallery__more');
    new GalleryItem(
      "images/add.jpg",
      "серфинг",
      ".gallery__photo",
      "mix",
      "category-b",
      "gallery__item",
      "gallery__item--add"
    ).render();
    new GalleryItem(
      "images/add2.jpg",
      "серфинг",
      ".gallery__photo",
      "mix",
      "category-a",
      "gallery__item",
      "gallery__item--add"
    ).render();
    new GalleryItem(
      "images/add1.jpg",
      "серфинг",
      ".gallery__photo",
      "mix",
      "category-c",
      "gallery__item",
      "gallery__item--add"
    ).render();

  }, {once: true});


});
