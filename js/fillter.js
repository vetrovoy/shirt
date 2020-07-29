//const elem = document.querySelector('.gallary-fillter__items-container');
////const item = document.querySelectorAll('.gallary-fillter__items-item');
//
//const iso = new Isotope( elem, {
//    
//  itemSelector: '.gallary-fillter__item',
//    fillter:'new'
//});

(function() {
  const elem = document.querySelector(".gallary-fillter__items-container");
  const iso = new Isotope(elem, {
    itemSelector: ".gallary-fillter__item",
    filter: '.popular'
  });

  const controlls = document.querySelectorAll(".gallery-fillter__link");
  const activeClass = "gallery-fillter__nav-active";

  controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
      e.preventDefault();
      
      const filterName = control.getAttribute("data-filter");

      controlls.forEach(function(link) {
        link.closest(".gallery-fillter__nav").classList.remove(activeClass);
      });

      control.closest(".gallery-fillter__nav").classList.add(activeClass);

      iso.arrange({
        filter: `.${filterName}`
      })
    });
  });
})();
