const tabButtons = document.querySelectorAll('.tabs__tab');
const ctaForm = document.querySelector('.form');
const sendButton = document.querySelector('.form-send__button');
const modalSearch = document.querySelector('.modal-search');
const searchBtn = document.querySelector('.search__button');
const modalSearchClose = document.querySelector('.modal-search__close');

searchBtn.addEventListener('click', event => {
  event.preventDefault();
  modalSearch.classList.add('modal-search--active');
  document.body.style.overflow = "hidden";
})

modalSearch.addEventListener('click', event => {
  const target = event.target;

  if(target == modalSearchClose) {
    modalSearch.classList.remove('modal-search--active')
    document.body.style.overflow = "";
  }
})

sendButton.addEventListener('click', event => {
  event.preventDefault();
})

tabButtons.forEach(item => {
  item.addEventListener('click', event => {
    const target = event.target;
    if(!target.classList.contains('tabs__tab--active')) {
      tabButtons.forEach(item => {
        item.classList.remove('tabs__tab--active')
      })
      target.classList.add('tabs__tab--active');
    }
  })
});


ctaForm.addEventListener('change', event => {
  const target = event.target;
  const label = target.labels[0];
  if(label && target.value) {
    label.classList.add('form-data__label--focus');
  } else {
    label.classList.remove('form-data__label--focus');
  }
})





$('.hero-slider').slick({
  infinite: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: `<button type="button" class="slick-prev hero-prev">
    <svg class="icon" width="16" height="13">
      <use href="./img/icons/icons.svg#slider-arrow"></use>
    </svg>
  </button>`,
  nextArrow: `<button type="button" class="slick-next hero-next">
    <svg class="icon" width="16" height="13">
      <use href="./img/icons/icons.svg#slider-arrow"></use>
    </svg>
  </button>`,
});
$('.tabs-slider').slick({
  infinite: true,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: `<button type="button" class="slick-prev tabs-prev">
    <svg class="icon" width="16" height="13">
      <use href="./img/icons/icons.svg#slider-arrow"></use>
    </svg>
  </button>`,
  nextArrow: `<button type="button" class="slick-next tabs-next">
    <svg class="icon" width="16" height="13">
      <use href="./img/icons/icons.svg#slider-arrow"></use>
    </svg>
  </button>`,
});