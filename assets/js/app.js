import anime from 'animejs'
import './jquery'

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
