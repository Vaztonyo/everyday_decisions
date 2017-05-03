(function(){
  'use strict';

var musicGenre = document.querySelector('.favGenreQues');
var hipHop = document.getElementsByName('hip-hop');
var rappers = document.querySelector('.rappers');
var djs = document.querySelector('.djs');
var singers = document.querySelector('.singers');


var migosTop5=[
  { number: 1,
    artist: 'Migos',
    song:'Bad and Boujee'},
  { number: 2,
    artist: 'Migos',
    song:'Fight Night'},
  { number: 3,
    artist: 'Migos',
    song:'Chinatown'},
  { number: 4,
    artist: 'Migos',
    song:'Handsome and Wealthy'},
  { number: 5,
    artist: 'Migos',
    song:'Hannah Montana'},
];

var kendrickTop5=[
  { number: 1,
    artist: 'Kendrick Lamar',
    song: 'm.A.A.d city'},
  { number: 2,
    artist: 'Kendrick Lamar',
    song: 'The Art of Peer Pressure'},
  { number: 3,
    artist: 'Kendrick Lamar',
    song: 'These Walls'},
  { number: 4,
    artist: 'Kendrick Lamar',
    song: 'Money Trees'},
  { number: 5,
    artist: 'Kendrick Lamar',
    song: 'i'},
];

    musicGenre.addEventListener('change', function(event){
        var selectedGenre = event.target.value;
        // console.log(selectedGenre);


        if (selectedGenre === 'Hip-Hop') {
          djs.classList.remove('show');
          singers.classList.remove('show');
          djs.classList.add('djs');
          singers.classList.add('singers');
          rappers.classList.remove('rappers');
          rappers.classList.add('show');
          return rappers;
        }

        if (selectedGenre === 'EDM') {
          rappers.classList.remove('show');
          singers.classList.remove('show');
          rappers.classList.add('rappers');
          singers.classList.add('singers');
          djs.classList.remove('djs');
          djs.classList.add('show');
          return djs;
        }

        if (selectedGenre === 'RnB') {
          rappers.classList.remove('show');
          djs.classList.remove('show');
          rappers.classList.add('rappers');
          djs.classList.add('djs');
          singers.classList.remove('singers');
          singers.classList.add('show');
          return singers;
        }

    });
})();
