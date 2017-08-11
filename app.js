// app.js
/* global angular */
(function () {
  angular.module('superheroPhonebook', [])
  .controller('SuperheroController', [SuperheroController])

  function SuperheroController () {
    this.heroes = [
      { name: 'Batman', phone_number: 'Bat Signal', comics_affiliation: 'DC', image_url: 'https://s-media-cache-ak0.pinimg.com/736x/e5/a0/69/e5a06942fa42823c88be5f3a834e063d--fantastic-art-bat-family.jpg' },
      { name: 'Captain America', phone_number: 'Muricah or USA-USA', comics_affiliation: 'Marvel', image_url: 'https://s-media-cache-ak0.pinimg.com/736x/70/01/0b/70010b879c8b8f955da0a7ddfaa7de4d--avengers-tattoo-captain-america-art.jpg' },
      { name: 'HawkEye', phone_number: 'CAH CAW', comics_affiliation: 'Marvel', image_url: 'http://vignette2.wikia.nocookie.net/marvelvscapcom/images/5/52/Hawkeye.png/revision/latest?cb=20131228104146' },
      { name: 'Flash', phone_number: ' vroom ', comics_affiliation: 'Marvel', image_url: 'http://www.cbr.com/wp-content/uploads/2017/01/the-flash-barry-allen-cw.jpg' },
      { name: 'Kirby', phone_number: 'Food', comics_affiliation: 'DC', image_url: 'http://www.smashbros.com/images/character/kirby/main.png' },
      { name: 'IronMan', phone_number: '$$', comics_affiliation: 'Marvel', image_url: 'http://www.freepngimg.com/download/iron_man/1-2-iron-man-picture.png' }
    ]
  }
})()
