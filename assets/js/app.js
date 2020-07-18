import anime from 'animejs'
import './jquery'
import 'owl.carousel'

anime({
  // left to right
  targets: '.shape-one, .shape-six',
  translateX: 100,
  duration: 10000,
})

anime({
  // bottom to top
  targets: '.shape-two',
  translateY: -100,
  duration: 10000,
})

anime({
  // top to bottom
  targets: '.shape-tree',
  translateY: 100,
  duration: 10000,
})

anime({
  // right to left
  targets: '.shape-four, .shape-seven',
  translateX: -100,
  duration: 10000,
})

anime({
  targets: '.shape-five',
  scale: [0, 1],
  duration: 10000,
})

$('#owl-carousel-welcome').owlCarousel({
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
      loop: true,
    },
    576: {
      items: 2,
      loop: true,
    },
    992: {
      items: 3,
      loop: true,
    },
    1200: {
      items: 5,
      loop: false,
    },
  },
})

$('#owl-carousel-four').owlCarousel({
  margin: 10,
  nav: true,
  loop: true,
  center: true,
  autoWidth: true,
  navText: ["<div class='prev-slide'></div>", "<div class='next-slide'></div>"],
  responsive: {
    0: {
      stagePadding: 21,
      items: 1,
    },
    576: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
      center: false,
    },
  },
})
