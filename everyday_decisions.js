(function(){
  'use strict';

  function migoTemplate(templateSelector) {
      var templateText = document.querySelector(templateSelector).innerHTML;
      return Handlebars.compile(templateText);
  }
  function kendrickTemplate(templateSelector) {
      var templateText = document.querySelector(templateSelector).innerHTML;
      return Handlebars.compile(templateText);
  }
  function martinTemplate(templateSelector) {
     var templateText = document.querySelector(templateSelector).innerHTML;
      return Handlebars.compile(templateText);
  }
  function chainTemplate(templateSelector) {
     var templateText = document.querySelector(templateSelector).innerHTML;
      return Handlebars.compile(templateText);
  }
  function chrisTemplate(templateSelector) {
      var templateText = document.querySelector(templateSelector).innerHTML;
      return Handlebars.compile(templateText);
  }
  function beyonceTemplate(templateSelector) {
      var templateText = document.querySelector(templateSelector).innerHTML;
      return Handlebars.compile(templateText);
  }

var migoTemplate = migoTemplate('.migoTemplate');
var migoElement = document.querySelector('.migo');
var kendrickTemplate = kendrickTemplate('.kendrickTemplate');
var kendrickElement = document.querySelector('.kendrick');
var martinTemplate = martinTemplate('.martinTemplate');
var martinElement = document.querySelector('.martin');
var chainTemplate = chainTemplate('.chainTemplate');
var chainElement = document.querySelector('.chainsmoker');
var chrisTemplate = chrisTemplate('.chrisTemplate');
var chrisElement = document.querySelector('.chris');
var beyonceTemplate = beyonceTemplate('.beyonceTemplate');
var beyonceElement = document.querySelector('.beyonce');

var musicGenre = document.querySelector('.favGenreQues');
var hipHop = document.getElementsByName('hip-hop');
var rappers = document.querySelector('.rappers');
var djs = document.querySelector('.djs');
var singers = document.querySelector('.singers');
var artist = document.querySelector('.q2');
var artistE = document.querySelector('.q2E');
var artistR = document.querySelector('.q2R');
var migos = document.querySelector('.migos');
var kendrickLamar = document.querySelector('.kendrickL');
var martinGarrix = document.querySelector('.martinG');
var theChainsmokers = document.querySelector('.chainsmokers');
var beyonce = document.querySelector('.beyonceK');
var chrisBrown = document.querySelector('.chrisB');

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

var martinTop5=[
  { number: 1,
    artist: 'Martin Garrix',
    song: 'In the Name of Love'},
  { number: 2,
    artist: 'Martin Garrix',
    song: 'Animals'},
  { number: 3,
    artist: 'Martin Garrix',
    song: 'Dont Look Down'},
  { number: 4,
    artist: 'Martin Garrix',
    song: 'Scared to be Lonely'},
  { number: 5,
    artist: 'Martin Garrix',
    song: 'Forbidden Voices'},
];

var chainsmokersTop5=[
  { number: 1,
    artist: 'The Chainsmokers',
    song: 'Closer'},
  { number: 2,
    artist: 'The Chainsmokers',
    song: 'Something Just Like This'},
  { number: 3,
    artist: 'The Chainsmokers',
    song: 'Roses'},
  { number: 4,
    artist: 'The Chainsmokers',
    song: 'Dont Let Me Down'},
  { number: 5,
    artist: 'The Chainsmokers',
    song: 'Paris'},
];

var chrisTop5=[
  { number: 1,
    artist: 'Chris Brown',
    song: 'Run It'},
  { number: 2,
    artist: 'Chris Brown',
    song: 'Kiss Kiss'},
  { number: 3,
    artist: 'Chris Brown',
    song: 'Forever'},
  { number: 4,
    artist: 'Chris Brown',
    song: 'With You'},
  { number: 5,
    artist: 'Chris Brown',
    song: 'No Air'},
];

var beyonceTop5=[
  { number: 1,
    artist: 'Beyonce',
    song: 'If I Were a Boy'},
  { number: 2,
    artist: 'Beyonce',
    song: 'Halo'},
  { number: 3,
    artist: 'Beyonce',
    song: 'Single Ladies'},
  { number: 4,
    artist: 'Beyonce',
    song: 'Drunk in Love'},
  { number: 5,
    artist: 'Beyonce',
    song: '7/11'},
];

    musicGenre.addEventListener('change', function(event){
        var selectedGenre = event.target.value;
        // alert(selectedGenre);

        if (selectedGenre === 'Hip-Hop') {
          djs.classList.remove('show');
          singers.classList.remove('show');
          djs.classList.add('djs');
          singers.classList.add('singers');
          beyonce.classList.add('beyonceK');
          kendrickLamar.classList.add('kendrickL');
          migos.classList.add('migos');
          theChainsmokers.classList.add('chainsmokers');
          martinGarrix.classList.add('martinG');
          chrisBrown.classList.add('chrisB');
          rappers.classList.remove('rappers');
          rappers.classList.add('show');
          return rappers;
        }

        if (selectedGenre === 'EDM') {
          rappers.classList.remove('show');
          singers.classList.remove('show');
          rappers.classList.add('rappers');
          singers.classList.add('singers');
          beyonce.classList.add('beyonceK');
          kendrickLamar.classList.add('kendrickL');
          migos.classList.add('migos');
          theChainsmokers.classList.add('chainsmokers');
          martinGarrix.classList.add('martinG');
          chrisBrown.classList.add('chrisB');
          djs.classList.remove('djs');
          djs.classList.add('show');
          return djs;
        }

        if (selectedGenre === 'RnB') {

          rappers.classList.remove('show');
          djs.classList.remove('show');
          rappers.classList.add('rappers');
          djs.classList.add('djs');
          beyonce.classList.add('beyonceK');
          kendrickLamar.classList.add('kendrickL');
          migos.classList.add('migos');
          theChainsmokers.classList.add('chainsmokers');
          martinGarrix.classList.add('martinG');
          chrisBrown.classList.add('chrisB');
          singers.classList.remove('singers');
          singers.classList.add('show');
          return singers;
        }

    });

    function showData(data) {
        migoElement.innerHTML = migoTemplate({
            migosTop5
          });
        kendrickElement.innerHTML = kendrickTemplate({
          kendrickTop5
        });
        martinElement.innerHTML = martinTemplate({
            martinTop5
          });
        chainElement.innerHTML = chainTemplate({
              chainsmokersTop5
            });
        beyonceElement.innerHTML = beyonceTemplate({
              beyonceTop5
            });
        chrisElement.innerHTML = chrisTemplate({
              chrisTop5
            });
    }
    showData(migosTop5);
    showData(kendrickTop5);
    showData(martinTop5);
    showData(chainsmokersTop5);
    showData(beyonceTop5);
    showData(chrisTop5);

    artist.addEventListener('change', function(e){
        var selectedArtist = e.target.value;

        if (selectedArtist === 'Migos') {
          kendrickLamar.classList.remove('show');
          kendrickLamar.classList.add('kendrickL');
          migos.classList.remove('migos');
          migos.classList.add('show');
          return migos;
        }

        if (selectedArtist === 'Kendrick Lamar') {
          migos.classList.remove('show');
          migos.classList.add('migos');
          kendrickLamar.classList.remove('kendrickL');
          kendrickLamar.classList.add('show');
          return kendrickLamar;
        }


    });

  artistE.addEventListener('change', function(i){
    var selectedArtist = i.target.value;

    if (selectedArtist === 'Martin Garrix') {
      theChainsmokers.classList.remove('show');
      theChainsmokers.classList.add('chainsmokers');
      martinGarrix.classList.remove('martinG');
      martinGarrix.classList.add('show');
      return martinGarrix;
    }

    if (selectedArtist === 'The Chainsmokers') {
      martinGarrix.classList.remove('show');
      martinGarrix.classList.add('martinG');
      theChainsmokers.classList.remove('chainsmokers');
      theChainsmokers.classList.add('show');
      return theChainsmokers;
    }

    });

    artistR.addEventListener('change', function(r){
      var selectedArtist = r.target.value;

      if (selectedArtist === 'Beyonce') {
        chrisBrown.classList.remove('show');
        chrisBrown.classList.add('chrisB');
        beyonce.classList.remove('beyonceK');
        beyonce.classList.add('show');
        return beyonce;
      }

      if (selectedArtist === 'Chris Brown') {
        beyonce.classList.remove('show');
        beyonce.classList.add('beyonceK');
        chrisBrown.classList.remove('chrisB');
        chrisBrown.classList.add('show');
        return chrisBrown;
      }

      });

})();
